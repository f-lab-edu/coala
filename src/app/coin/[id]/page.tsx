import { Suspense } from 'react';
import { CoinById } from '@/app/coin/[id]/CoinById';

export default function Page({ params }: { params: { id: string | string[] } }) {
  return (
    <div>
      <h1>상세 페이지</h1>
      {/*  Async Component (server component with fetch)를 사용할때는 항상 Suspense로 감싸야 waterfall로 api를 가지고 오지 않게됨.
      Server Component를 instantiate하는 방법으로 데이터를 가지고 오기 때문에 이제는 Suspense사용이 필수가 됨.
      */}
      <Suspense>
        <CoinById coinId={Number(params.id)} />
      </Suspense>
      <span>{params.id}</span>
    </div>
  );
}
