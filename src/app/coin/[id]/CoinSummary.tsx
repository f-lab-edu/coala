'use client';

import { StarIcon } from '@/_components/utils/Icons';
import { orders, timePeriods } from '@/_constants/dev';
import { useState } from 'react';
import { Modal } from '@/_components/common/Modal';

type Props = {
  coinName: string;
  className?: string;
};

export function CoinSummary({ coinName, className }: Props) {
  const [period, setPeriod] = useState('1d');
  const [modalType, setModalType] = useState<'buy' | 'sell' | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (type: 'buy' | 'sell') => {
    setModalType(type);
    setIsOpen(true);
  };

  const handleCloseModal = () => setIsOpen(false);

  const handleSubmit = () => {
    // 구매 또는 판매 로직 실행
    console.log(`${modalType} submitted!`);
    handleCloseModal();
  };
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

      {modalType && (
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
          title={modalType === 'buy' ? '구매하기' : '판매하기'}
          submitLabel={modalType === 'buy' ? '구매' : '판매'}
        >
          {/* TODO s */}
          <form>
            <div className="mb-4">
              <label className="mb-2 block">수량</label>
              <input type="number" className="w-full rounded border border-gray-300 p-2" placeholder="수량 입력" />
            </div>
            <div className="mb-4">
              <label className="mb-2 block">가격</label>
              <input type="number" className="w-full rounded border border-gray-300 p-2" placeholder="가격 입력" />
            </div>
          </form>
        </Modal>
      )}

      {/* TODO 보유 코인이 없는 경우 판매하기 버튼 숨김 / 로그인 안 된 경우 전부 숨김  */}
      <div className="sticky bottom-16 left-0 right-0 z-50 flex w-full max-w-[600px] justify-around">
        <button className="btn btn-primary w-5/12 rounded-md py-2 text-white" onClick={() => handleOpenModal('buy')}>
          구매하기
        </button>
        <button className="btn btn-neutral w-5/12 rounded-md py-2 text-white" onClick={() => handleOpenModal('sell')}>
          판매하기
        </button>
        <button className="btn w-1/12 rounded-md p-1">
          <StarIcon />
        </button>
      </div>
    </>
  );
}
