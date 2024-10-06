import { APP_DOMAIN } from '@/_constants/urls';
import { getAccessToken } from '@/_utils/auth';
import { sql } from '@/_utils/db';
import { parseSearchParams } from '@/_utils/parseSearchParams';
import { serverErrorHandler } from '@/_utils/serverErrorHandler';
import { signToken } from '@/_utils/signToken.server';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = parseSearchParams(request.nextUrl.searchParams);
    const code = searchParams.code || '';
    if (code === '') {
      return NextResponse.json({ message: 'code is empty' }, { status: 400 });
    }

    const accessToken = await getAccessToken(code);

    const response = await fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      return NextResponse.json({ message: 'no user info' }, { status: 400 });
    }
    const googleUserProfile = await response.json();
    const providerId = googleUserProfile.id;
    const providerEmail = googleUserProfile.email;
    const providerPicture = googleUserProfile.picture;

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
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    cookies().set({ name: 'token', value: token, maxAge: ONE_YEAR_IN_SECS, path: '/', httpOnly: true });

    return NextResponse.redirect(`${APP_DOMAIN}`);
  } catch (e) {
    serverErrorHandler(e, 'Error during Google OAuth login process');
  }
}
