'use client';

import { CoinIcon, StarIcon } from '@/_components/utils/Icons';
import { Coin } from '@/app/(home)/page';
import Link from 'next/link';
import { useState } from 'react';

export function CoinList({ coins }: { coins: Coin[] }) {
  return (
    <div className="mt-4 space-y-4">
      {coins.map((coin) => (
        <CoinItem key={coin.symbol} {...coin} />
      ))}
    </div>
  );
}

export function CoinItem({ symbol, name, price, change, isBookmarked }: Coin) {
  const changeClass = change > 0 ? 'text-green-500' : 'text-red-500';
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked); // 로컬 상태 업데이트
    // TODO: API 호출로 서버 상태 업데이트
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <button onClick={handleBookmarkClick} className={`text-xl ${bookmarked ? 'text-yellow-500' : 'text-gray-400'}`}>
          <StarIcon solid={bookmarked} />
        </button>
        <Link href={`/coin/${symbol}`} className="flex items-center space-x-2">
          <CoinIcon className="size-10 rounded-full border border-black p-1" />
          <div>
            <p className="font-semibold">{symbol}</p>
            <p className="text-sm text-gray-500">{name}</p>
          </div>
        </Link>
      </div>

      <div className="text-right">
        <p className="font-semibold">${price}</p>
        <p className={`${changeClass} text-sm`}>{change}%</p>
      </div>
    </div>
  );
}
