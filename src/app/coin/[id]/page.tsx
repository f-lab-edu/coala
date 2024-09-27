import { Suspense } from 'react';
import { CoinById } from '@/app/coin/[id]/CoinById';

export default function Page({ params }: { params: { id: string | string[] } }) {
  return (
    <div>
      <h1>상세 페이지</h1>
      <Suspense>
        <CoinById coinId={Number(params.id)} />
      </Suspense>
      <span>{params.id}</span>
    </div>
  );
}
