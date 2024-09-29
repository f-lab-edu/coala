'use server';

import { cache } from 'react';
import { coins } from '@/_constants/dev';

export async function getCoinsAction() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return coins;
}

/* TODO: cache에 대해서 알아보기 */
export const fetchCoins = cache(getCoinsAction);
