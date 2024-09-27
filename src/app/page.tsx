/** 여기에 use server를 안써도 되는 이유는 기본값이 항상 server component이기 때문,
 * 원한다면 page.tsx를 'use client' directive를 이용해서 client component로 사용할수 있음.
 * 만약 page.tsx가 client component면 이 page component의 모든 자식은 client component가 되고,
 * 자식중 일부를 server component로 바꾸고 싶으면 바꾸고 싶은 component에 'use server'를 사용해 주면됨.
 * */
import { fetchCoins } from '@/_actions/coin/getCoins.action';
import Card from '@/_components/card';

export type Coin = {
  name: string;
  img: string;
  price: number;
  symbol: string;
};

export default async function Home() {
  const coins = await fetchCoins();

  return (
    <div className="mx-auto flex flex-wrap gap-4">
      {coins.map((coin) => (
        <Card key={coin.symbol} {...coin} />
      ))}
    </div>
  );
}
