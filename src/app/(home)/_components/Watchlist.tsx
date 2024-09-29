import { fetchCoins } from '@/_actions/coin/getCoins.action';
import { Coin } from '../page';
import { CoinIcon } from '@/_components/Icons';
import Link from 'next/link';

// TODO 관심 코인, 구매한 코인 구분하여 보여준다. - Tabs

// TODO: 상태 관리 추가
// fetchCoins 함수로 받은 코인을 필터링하여 상태를 관리?
// 관심 코인과 구매코인 데이터를 백엔드에서 분리해서 가져올 수 있으면 더 효율적일듯

export default async function Watchlist() {
  const coins = await fetchCoins();

  return (
    <div className="rounded-lg bg-gray-50 p-4 shadow-inner">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-semibold">Watchlist</h4>
        <div className="flex space-x-1">
          <span className="h-2 w-2 rounded-full bg-black"></span>
          <span className="h-2 w-2 rounded-full bg-black"></span>
          <span className="h-2 w-2 rounded-full bg-black"></span>
        </div>
      </div>
      {/* Coins List */}
      <div className="space-y-4">
        {coins.map((coin: Coin) => (
          <CoinItem key={coin.symbol} {...coin} />
        ))}
      </div>
    </div>
  );
}

function CoinItem({ logo, symbol, name, price, change }: any) {
  const changeClass = change > 0 ? 'text-green-500' : 'text-red-500';

  return (
    <Link href={`/coin/${symbol}`} className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <CoinIcon className="size-10 rounded-full border border-black p-1" />
        <div>
          <p className="font-semibold">{symbol}</p>
          <p className="text-sm text-gray-500">{name}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="font-semibold">${price}</p>
        <p className={`${changeClass} text-sm`}>{change}%</p>
      </div>
    </Link>
  );
}
