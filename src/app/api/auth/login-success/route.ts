import { APP_DOMAIN } from '@/_constants/urls';
import { getGoogleUserProfile } from '@/_utils/auth';
import { setAuthCookie } from '@/_utils/cookies';
import { sql } from '@/_utils/db';
import { parseSearchParams } from '@/_utils/parseSearchParams';
import { serverErrorHandler } from '@/_utils/serverErrorHandler';
import { signToken } from '@/_utils/signToken.server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const code = await getGoogleAuthCode(request);
    const profile = await getGoogleUserProfile(code);
    const userId = await insertOrUpdateUser(profile);
    await generateAndSetAuthToken(userId);
    return NextResponse.redirect(`${APP_DOMAIN}`);
  } catch (e) {
    serverErrorHandler(e, 'Error during Google OAuth login process');
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

async function getGoogleAuthCode(request: NextRequest) {
  const searchParams = parseSearchParams(request.nextUrl.searchParams);
  const code = searchParams.code || '';
  if (code === '') {
    throw new Error('Code is empty');
  }
  return code;
}

async function insertOrUpdateUser(profile: { id: string; email: string; picture: string }) {
  const { id: providerId, email: providerEmail, picture: providerPicture } = profile;
  const [result] = (await sql`
    INSERT INTO users (email, google_id, picture)
    VALUES (${providerEmail}, ${providerId}, ${providerPicture})
    ON CONFLICT (email) 
    DO UPDATE SET
      google_id = EXCLUDED.google_id,
      picture = EXCLUDED.picture,
      email = EXCLUDED.email
    RETURNING *
  `) as Array<{ id: string; email: string }>;
  if (result == null) {
    throw new Error('handle_google_auth failed');
  }
  return Number(result.id);
}

async function generateAndSetAuthToken(userId: number) {
  const token = await signToken({ id: userId });
  setAuthCookie(token);
}
