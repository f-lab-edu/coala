'use client';

import { GOOGLE_AUTH_LOGIN_URL } from '@/_constants/urls';

export function LoginButton() {
  return (
    <div className="inline-flex gap-2">
      <a className="btn btn-primary" href={GOOGLE_AUTH_LOGIN_URL}>
        LOGIN
      </a>
    </div>
  );
}
