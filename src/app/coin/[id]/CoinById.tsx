/* 기본 행동은 부모가 server component면 자식도 server component, client component면 자식도 client component */
'use server';

import { fetchCoinById } from '@/_actions/coin/getCoinById.action';
import { CoinSummary } from './CoinSummary';

type Props = { coinId: number };

export async function CoinById({ coinId }: Props) {
  /**
   * component를 "서버에 담금질 한다" 라는 표현이 여기서 볼수 있음.
   * browser newtwork tab에서 보면 ?rsc=ㅁㄴㅇㄹㅁㄴ 이런식으로 데이터를 가지고 옴.
   * 그리고 element tab에서 보면 json payload로 이 데이터를 가지고 오는것을 볼수 있음.
   * */
  const coin = await fetchCoinById(coinId);

  return (
    <div className="mx-auto max-w-screen-sm">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">비트코인 (BTC)</h1>
        <p>
          <span className="text-xl font-semibold">$40,000</span>
          <span className="text-sm text-gray-500"> (₩50,000,000)</span>
        </p>
        <p className="text-md text-green-500">
          <span className="font-semibold">+5.32%</span>
        </p>
      </div>
      {/* User Interaction은 전부 이 component안에서 해결" */}
      <CoinSummary coinName={coin.name} />
    </div>
  );
}
