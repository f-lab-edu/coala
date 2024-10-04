import { Coin } from '@/app/(home)/page';
import { CoinItem } from './CoinItem';

export function CoinList({ coins }: { coins: Coin[] }) {
  return (
    <div className="mt-4 space-y-4">
      {coins.map((coin) => (
        <CoinItem key={coin.symbol} {...coin} />
      ))}
    </div>
  );
}
