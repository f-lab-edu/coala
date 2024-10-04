import { CoinList } from '@/_components/CoinList';
import { Coin } from '../(home)/page';
import { fetchCoins } from '@/_actions/coin/getCoins.action';

export default async function Page() {
  const coins: Coin[] = await fetchCoins();
  return (
    <div className="rounded-lg bg-gray-50 p-4 shadow-inner">
      <h1 className="text-xl font-bold">전체 </h1>
      <CoinList coins={[...coins, ...coins]} />
    </div>
  );
}
