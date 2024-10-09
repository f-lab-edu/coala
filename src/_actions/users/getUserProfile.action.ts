'use server';

import { getLoggedInUserId } from '@/_utils/auth';
import { sql } from '@/_utils/db';

export async function getUserProfileAction() {
  const userId = await getLoggedInUserId();
  const user = await getUserFromDB(userId);
  return user;
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
