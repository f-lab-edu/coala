import { cookies } from 'next/headers';

export function setAuthCookie(token: string) {
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  cookies().set({ name: 'token', value: token, maxAge: ONE_YEAR_IN_SECS, path: '/', httpOnly: true });
}
