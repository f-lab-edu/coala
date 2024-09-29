'use client';
import { CoinIcon, MoneyIcon } from '@/_components/Icons';
import { useRouter } from 'next/navigation';

export default function ActionButtons() {
  const router = useRouter();
  // TODO 매도/매수 페이지 추가하고 이동
  return (
    <div className="mb-6 grid grid-cols-2 gap-4">
      <button
        className="btn btn-neutral btn-lg w-full rounded-lg"
        onClick={() => {
          router.push('/trade/buy');
        }}
      >
        <CoinIcon />
        Buy
      </button>
      <button
        className="btn btn-primary btn-lg w-full rounded-lg"
        onClick={() => {
          router.push('/trade/sell');
        }}
      >
        <MoneyIcon />
        Sell
      </button>
    </div>
  );
}
