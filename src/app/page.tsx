import Card from '@/_components/card';

export type Coin = {
  name: string;
  img: string;
  price: number;
  symbol: string;
};

const coins: Coin[] = [
  {
    name: 'Bitcoin',
    img: 'https://www.cryptocompare.com/media/19633/btc.png',
    price: 10000,
    symbol: 'BTC',
  },
  {
    name: 'Ethereum',
    img: 'https://www.cryptocompare.com/media/20646/eth_logo.png',
    price: 400,
    symbol: 'ETH',
  },
  {
    name: 'Litecoin',
    img: 'https://www.cryptocompare.com/media/35309662/ltc.png',
    price: 100,
    symbol: 'LTC',
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex flex-wrap gap-4">
      {coins.map((coin) => (
        <Card key={coin.symbol} {...coin} />
      ))}
    </div>
  );
}
