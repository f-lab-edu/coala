'use client';
import { fetchCoins } from '@/_actions/coin/getCoins.action';
import { Coin } from '../page';
import { CoinIcon } from '@/_components/Icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// TODO 관심 코인, 구매한 코인 구분하여 보여준다. - Tabs

export default function Watchlist() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [activeTab, setActiveTab] = useState<'favorite' | 'owned'>('favorite');
  const [favoriteCoins, setFavoriteCoins] = useState<Coin[]>([]);
  const [ownedCoins, setOwnedCoins] = useState<Coin[]>([]);

  useEffect(() => {
    // 코인 데이터를 fetch하고 필터링
    const fetchData = async () => {
      const allCoins = await fetchCoins();
      setCoins(allCoins);

      // 관심 코인과 구매 코인 필터링 TODO 백엔드?
      setFavoriteCoins(allCoins);
      setOwnedCoins(allCoins.filter((coin) => coin.name === 'Bitcoin' || coin.name === 'Ethereum'));
    };

    fetchData();
  }, []);

  return (
    <div className="rounded-lg bg-gray-50 p-4 shadow-inner">
      <div className="mb-4 flex items-center justify-between"></div>
      <div className="tabs tabs-bordered">
        <button
          className={`tab ${activeTab === 'favorite' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('favorite')}
        >
          관심있는 코인
        </button>
        <button className={`tab ${activeTab === 'owned' ? 'tab-active' : ''}`} onClick={() => setActiveTab('owned')}>
          보유한 코인
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4 space-y-4">
        {activeTab === 'favorite' && favoriteCoins.map((coin) => <CoinItem key={coin.symbol} {...coin} />)}

        {activeTab === 'owned' && ownedCoins.map((coin) => <CoinItem key={coin.symbol} {...coin} />)}
      </div>
    </div>
  );
}

function CoinItem({ symbol, name, price, change }: Coin) {
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
