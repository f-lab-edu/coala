import { CoinList } from '@/_components/CoinList';
import { Coin } from '../(home)/page';
import { fetchCoins } from '@/_actions/coin/getCoins.action';
import { SearchIcon } from '@/_components/utils/Icons';

export default async function Page() {
  const coins: Coin[] = await fetchCoins();
  return (
    <div className="container">
      {/* TODO 검색 컴포넌트 */}
      <div className="mb-3">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="input-primary grow" placeholder="검색" />
          <SearchIcon />
        </label>
      </div>
      <div className="rounded-lg bg-gray-50 p-4 shadow-inner">
        {/* TODO 탭 추가  */}
        {/* <div className="tabs tabs-bordered">
          <button
            className={`tab ${activeTab === 'favorite' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('favorite')}
          >
            전체
          </button>
          <button className={`tab ${activeTab === 'owned' ? 'tab-active' : ''}`} onClick={() => setActiveTab('owned')}>
            상승
          </button>
          <button className={`tab ${activeTab === 'owned' ? 'tab-active' : ''}`} onClick={() => setActiveTab('owned')}>
            하락
          </button>
        </div>{' '} */}
        <CoinList coins={[...coins, ...coins]} />
      </div>
    </div>
  );
}
