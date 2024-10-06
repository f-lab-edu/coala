'use client';

import { GOOGLE_AUTH_LOGIN_URL } from '@/_constants/urls';
import { getUserProfileAction } from '@/_actions/users/getUserProfile.action';

export function LoginButton() {
  async function getUser() {
    const userProfile = await getUserProfileAction();
    console.log(userProfile);
  }

  return (
    <div className="inline-flex gap-2">
      <a className="btn btn-primary" href={GOOGLE_AUTH_LOGIN_URL}>
        LOGIN
      </a>
      <button className="btn btn-primary" onClick={() => getUser()}>
        Get User Profile
      </button>
    </div>
  );
}
