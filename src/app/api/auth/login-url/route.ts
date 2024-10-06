import { NextResponse } from 'next/server';
import { OAuth2Client } from 'google-auth-library';
import { GOOGLE_AUTH_LOGIN_SUCCESS_URL } from '@/_constants/urls';

export async function GET() {
  try {
    const googleAuthClient = new OAuth2Client({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_SECRET_KEY,
      redirectUri: GOOGLE_AUTH_LOGIN_SUCCESS_URL,
    });
    const googleAuthLoginUrl = googleAuthClient.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'],
    });

    return NextResponse.redirect(googleAuthLoginUrl);
  } catch (e) {
    console.log(`TODO: handle error`, e);
  }
}

export { OPTIONS } from '@/_utils/optionsHandler';
