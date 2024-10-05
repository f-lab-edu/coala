'use client';

import { StarIcon } from '@/_components/Icons';
import { orders, timePeriods } from '@/_constants/dev';
import { useState } from 'react';

type Props = {
  coinName: string;
  className?: string;
};

export function CoinSummary({ coinName, className }: Props) {
  const [period, setPeriod] = useState('1d');

  return (
    <>
      <div className={`flex items-center space-x-4 ${className}`}></div>
      <div className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">차트</h2>
        <div className="tabs-boxed tabs mb-4">
          {timePeriods.map((p) => (
            <button
              key={p.value}
              className={`tab ${p.value === period ? 'tab-active' : ''}`}
              onClick={() => setPeriod(p.value)}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="flex h-64 items-center justify-center bg-gray-100">
          <p>차트 영역 - {period}</p>
        </div>
      </div>

      {/* TODO 로그인, 주문 내역이 있는 경우만 보여준다 */}
      <div className="mb-24 rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">내 코인</h2>
        <div className="mb-4 flex justify-between">
          <p>
            보유 수량 <span className="font-semibold">3.5 BTC</span>
          </p>
          <p>
            총 금액 <span className="font-semibold">$140,000</span>
          </p>
          <p>
            평균 가격 <span className="font-semibold">$38,000</span>
          </p>
        </div>
        <h3 className="mb-2 text-xl font-semibold">주문 내역</h3>
        <ul className="space-y-2">
          {orders.map((order) => (
            <li key={order.id} className="rounded-lg bg-gray-100 p-2 shadow">
              <div className="flex justify-between">
                <span>{order.date}</span>
                <span>{order.type === 'buy' ? '구매' : '판매'}</span>
              </div>
              <div className="flex justify-between">
                <span>{order.amount}</span>
                <span>{order.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* TODO 보유 코인이 없는 경우 판매하기 버튼 숨김 / 로그인 안 된 경우 전부 숨김  */}
      <div className="fixed bottom-12 left-0 right-0 mx-auto mt-16 flex max-w-[600px] justify-around bg-white bg-opacity-60 p-4 pt-16 shadow-sm">
        <button className="btn btn-primary w-5/12 rounded-md py-2 text-white">구매하기</button>
        <button className="btn btn-neutral w-5/12 rounded-md py-2 text-white">판매하기</button>
        <button className="btn w-1/12 rounded-md p-1">
          <StarIcon />
        </button>
      </div>
    </>
  );
}
