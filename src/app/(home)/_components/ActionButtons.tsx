import { CoinIcon, MoneyIcon } from '@/_components/Icons';

export default function ActionButtons() {
  return (
    <div className="mb-6 grid grid-cols-2 gap-4">
      <button className="btn btn-neutral btn-lg w-full rounded-lg">
        <CoinIcon />
        Buy
      </button>
      <button className="btn btn-primary btn-lg w-full rounded-lg">
        <MoneyIcon />
        Sell
      </button>
    </div>
  );
}
