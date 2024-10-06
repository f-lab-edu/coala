'use server';

import { verify } from 'hono/jwt';
import { cookies } from 'next/headers';
import { neon } from '@neondatabase/serverless';

export async function getUserProfileAction() {
  const token = cookies().get('token')?.value || '';
  if (token === '') {
    throw Error('Token not found');
  }
  const { id: userId } = await verify(token, process.env.JWT_PRIVATE_KEY);
  const sql = neon(process.env.DATABASE_URL);
  const [user] = (await sql`
    SELECT
      id, email, picture
    FROM users
    WHERE id = ${userId}
  `) as Array<{ id: string; email: string; picture: string }>;
  return user;
}
