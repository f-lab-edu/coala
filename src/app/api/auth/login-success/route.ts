import { NextRequest, NextResponse } from 'next/server';
import { parseSearchParams } from '@/_utils/parseSearchParams';
import { OAuth2Client } from 'google-auth-library';
import { neon } from '@neondatabase/serverless';
import { signToken } from '@/_utils/signToken.server';
import { cookies } from 'next/headers';
import { APP_DOMAIN, GOOGLE_AUTH_LOGIN_SUCCESS_URL } from '@/_constants/urls';

export async function GET(request: NextRequest) {
  try {
    const searchParams = parseSearchParams(request.nextUrl.searchParams);
    const code = searchParams.code || '';
    if (code === '') {
      return NextResponse.json({ message: 'code is empty' }, { status: 400 });
    }

    const googleAuthClient = new OAuth2Client({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_SECRET_KEY,
      redirectUri: GOOGLE_AUTH_LOGIN_SUCCESS_URL,
    });
    const { tokens } = await googleAuthClient.getToken(code);
    const accessToken = tokens.access_token;

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

    const sql = neon(process.env.DATABASE_URL);
    const [result] = (await sql`
      INSERT INTO users (email, google_id)
      VALUES (${providerEmail}, ${providerId})
      ON CONFLICT (email) 
      DO UPDATE SET google_id = EXCLUDED.google_id
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
    console.log(`TODO: handle error`, e);
  }
}
