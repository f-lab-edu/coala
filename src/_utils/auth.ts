import { GOOGLE_AUTH_LOGIN_SUCCESS_URL } from '@/_constants/urls';
import { OAuth2Client } from 'google-auth-library';
import { NextResponse } from 'next/server';

const GOOGLE_USER_INFO_URL = 'https://www.googleapis.com/oauth2/v1/userinfo';

export const googleAuthClient = new OAuth2Client({
  clientId: process.env.GOOGLE_AUTH_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_AUTH_SECRET_KEY!,
  redirectUri: GOOGLE_AUTH_LOGIN_SUCCESS_URL,
});

export async function getGoogleToken(code: string) {
  const { tokens } = await googleAuthClient.getToken(code);

  return tokens.access_token;
}

export async function getGoogleUserProfile(code: string) {
  const accessToken = await getGoogleToken(code);

  const response = await fetch(GOOGLE_USER_INFO_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    return NextResponse.json({ message: 'no user info' }, { status: 400 });
  }

  return response.json();
}
