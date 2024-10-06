'use server';

import { sql } from '@/_utils/db';
import { verify } from 'hono/jwt';
import { cookies } from 'next/headers';

export async function getUserProfileAction() {
  const token = await getToken();
  const { id: userId } = await verifyToken(token);
  const user = await getUserFromDB(userId);
  return user;
}

async function getToken() {
  const token = cookies().get('token')?.value || '';
  if (token === '') {
    throw Error('Token not found');
  }
  return token;
}

async function verifyToken(token: string) {
  return await verify(token, process.env.JWT_PRIVATE_KEY);
}

async function getUserFromDB(userId: string) {
  const [user] = (await sql`
    SELECT
      id, email, picture
    FROM users
    WHERE id = ${userId}
  `) as Array<{ id: string; email: string; picture: string }>;
  return user;
}
