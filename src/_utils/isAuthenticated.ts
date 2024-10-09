'use server';
import { verify } from 'hono/jwt';
import { cookies } from 'next/headers';

export async function isAuthenticated() {
  const token = cookies().get('token')?.value;
  if (!token) return false;

  try {
    const decodedToken = await verify(token, process.env.JWT_PRIVATE_KEY);
    return decodedToken?.id != null;
  } catch (e) {
    console.log(`JWT verification failed: ${e}`);
    return false;
  }
}
