/** use server directive를 안써주면 이 함수는 그냥 asyn 함수이기에 client component에서 사용을 하면,
 * 예를 들어 secret key나 다른 민감한 정보가 노출될수 있음.
 * (물론 process.env에 넣은 정보는 NEXT_PUBLIC_*이 아닌 이상 client에 보여지않긴함)
 *
 * 이렇게 use server directive를 사용하면, client component에서는 api endpoint가 만들어지고;
 * 서버 컴포넌트나 api route에서는 특별한것 없는 async 함수가 됨.
 * */
'use server';

import { cache } from 'react';

/**
 * client component에서 이 함수가 불리면 이 함수의 param은 api request의 body로 들어가고,
 * return 되는 값이 api response로 받아오게됨. (action의 http method는 항상 POST 임)
 * server component와 api route에서는 그냥 함수사용하듯 return값 사용하면 됨.
 * */
export async function getCoinByIdAction(coinId: number | string) {
  return sqlQuery(coinId);
}

/** TODO: cache 가 왜 필요한지 알아보기 */
export const fetchCoinById = cache(getCoinByIdAction);

async function sqlQuery(coinId: string | number) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    id: Number(coinId),
    name: `CoinName ${coinId}`,
    price: 1000 * Number(coinId),
  };
}
