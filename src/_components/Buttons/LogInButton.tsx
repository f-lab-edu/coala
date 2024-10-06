'use client';

import { GOOGLE_AUTH_LOGIN_URL } from '@/_constants/urls';

export function LoginButton() {
  return (
    <a className="btn btn-primary" href={GOOGLE_AUTH_LOGIN_URL}>
      LOGIN
    </a>
  );
}
