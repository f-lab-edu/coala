import Link from 'next/link';
import { Coin } from '@/app/page';

export default function Card(props: Coin) {
  const { symbol, name, price } = props;

  return (
    <Link href={`/coin/${symbol}`}>
      <div className="card w-96 shadow-xl">
        <div className="card-body">
          <img className="mask mask-circle w-10" src={props.img} alt={name} />
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
}
