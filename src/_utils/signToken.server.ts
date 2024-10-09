import { sign } from 'hono/jwt';

export const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
export async function signToken(
  payload: {
    [key: string]: unknown;
    id: number;
  },
  expiration_in_seconds = ONE_YEAR_IN_SECS
) {
  const nowInSeconds = Math.floor(Date.now() / 1000);
  const data = {
    ...payload,
    iat: nowInSeconds,
    exp: nowInSeconds + expiration_in_seconds,
  };

  return await sign(data, process.env.JWT_PRIVATE_KEY);
}
