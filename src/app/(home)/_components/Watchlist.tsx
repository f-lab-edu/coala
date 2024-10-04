'use client';
import { fetchCoins } from '@/_actions/coin/getCoins.action';
import { Coin } from '../page';
import { useState, useEffect } from 'react';
import { CoinList } from '@/_components/CoinList';

export default function Watchlist() {
  const [activeTab, setActiveTab] = useState<'favorite' | 'owned'>('favorite');
  const [favoriteCoins, setFavoriteCoins] = useState<Coin[]>([]);
  const [ownedCoins, setOwnedCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const allCoins = await fetchCoins();

      // 관심 코인과 보유 코인 필터링
      setFavoriteCoins(allCoins); // 관심 코인 필터링 로직 추가 가능
      setOwnedCoins(allCoins.filter((coin) => coin.name === 'Bitcoin' || coin.name === 'Ethereum'));
    };

    fetchData();
  }, []);

  // 현재 탭에 따라 보여줄 코인 리스트 결정
  const displayedCoins = activeTab === 'favorite' ? favoriteCoins : ownedCoins;

  return (
    <div className="rounded-lg bg-gray-50 p-4 shadow-inner">
      <div className="tabs tabs-bordered">
        <button
          className={`tab ${activeTab === 'favorite' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('favorite')}
        >
          관심
        </button>
        <button className={`tab ${activeTab === 'owned' ? 'tab-active' : ''}`} onClick={() => setActiveTab('owned')}>
          보유
        </button>
      </div>

      {/* 선택된 탭에 따라 필터링된 코인 목록을 CoinList에 전달 */}
      <CoinList coins={displayedCoins} />
    </div>
  );
}
