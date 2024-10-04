import { Coin } from '@/app/(home)/page';
import Link from 'next/link';
import { CoinIcon } from '@/_components/Icons';

export function CoinItem({ symbol, name, price, change }: Coin) {
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
