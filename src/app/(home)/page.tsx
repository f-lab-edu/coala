import { Suspense } from 'react';
import ActionButtons from './_components/ActionButtons';
import TotalBalance from './_components/TotalBalance';
import UserInfo from './_components/UserInfo';
import Watchlist from './_components/Watchlist';
import CoinListSkeleton from '@/_components/skeleton/CoinListSkeleton';
import { LoginButton } from '@/_components/Buttons/LogInButton';
import { isAuthenticated } from '@/_utils/isAuthenticated';

export type Coin = {
  name: string;
  logo: string;
  price: number;
  symbol: string;
  change: number;
};
export default async function Home() {
  const isLoggedIn = isAuthenticated();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <UserInfo />
          <TotalBalance />
          <ActionButtons />
          <Suspense fallback={<CoinListSkeleton />}>
            <Watchlist />
          </Suspense>
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}
