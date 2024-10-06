import { getGoogleAuthClient } from '@/_utils/auth';
import { serverErrorHandler } from '@/_utils/serverErrorHandler';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const googleAuthClient = getGoogleAuthClient();
    const googleAuthLoginUrl = googleAuthClient.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'],
    });

    return NextResponse.redirect(googleAuthLoginUrl);
  } catch (e) {
    serverErrorHandler(e, 'Failed to get google auth login url');
  }
}

export { OPTIONS } from '@/_utils/optionsHandler';
