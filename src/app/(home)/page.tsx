import { Suspense } from 'react';
import ActionButtons from './_components/ActionButtons';
import TotalBalance from './_components/TotalBalance';
import UserInfo from './_components/UserInfo';
import Watchlist from './_components/Watchlist';
import CoinListSkeleton from '@/_components/skeleton/CoinListSkeleton';

export type Coin = {
  name: string;
  logo: string;
  price: number;
  symbol: string;
  change: number;
  isBookmarked: boolean;
};

export default async function Home() {
  /* page 로딩시 Suspense로 감쌀수 없음, 그래서 NextJs에서는 loading.tsx를 사용하여 page를 Suspense로 감쌈.
   * layout, page, laoding, error 등등 알아보기.
   * TODO: https://nextjs.org/docs/app/api-reference/file-conventions 참고하기
   * */
  return (
    <div>
      <UserInfo />
      <TotalBalance />
      {/* <ActionButtons /> */}
      <Suspense fallback={<CoinListSkeleton />}>
        <Watchlist />
      </Suspense>
    </div>
  );
}
