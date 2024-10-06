import { GOOGLE_AUTH_LOGIN_SUCCESS_URL } from '@/_constants/urls';
import { OAuth2Client } from 'google-auth-library';

export function getGoogleAuthClient() {
  return new OAuth2Client({
    clientId: process.env.GOOGLE_AUTH_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_AUTH_SECRET_KEY!,
    redirectUri: GOOGLE_AUTH_LOGIN_SUCCESS_URL,
  });
}

export async function getAccessToken(code: string) {
  const googleAuthClient = getGoogleAuthClient();
  const { tokens } = await googleAuthClient.getToken(code);

  return tokens.access_token;
}
