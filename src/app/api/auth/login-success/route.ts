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
    const searchParams = parseSearchParams(request.nextUrl.searchParams);
    const code = searchParams.code || '';
    if (code === '') {
      return NextResponse.json({ message: 'code is empty' }, { status: 400 });
    }
    const profile = await getGoogleUserProfile(code);

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
      return NextResponse.json({ message: 'handle_google_auth failed' }, { status: 400 });
    }
    const user_id = Number(result.id);

    const token = await signToken({ id: user_id });
    setAuthCookie(token);

    return NextResponse.redirect(`${APP_DOMAIN}`);
  } catch (e) {
    serverErrorHandler(e, 'Error during Google OAuth login process');
  }
}
