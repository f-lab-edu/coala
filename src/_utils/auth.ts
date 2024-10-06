import { OAuth2Client } from 'google-auth-library';
import { GOOGLE_AUTH_LOGIN_SUCCESS_URL } from '@/_constants/urls';

export function getGoogleAuthClient() {
  return new OAuth2Client({
    clientId: process.env.GOOGLE_AUTH_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_AUTH_SECRET_KEY!,
    redirectUri: GOOGLE_AUTH_LOGIN_SUCCESS_URL,
  });
}
