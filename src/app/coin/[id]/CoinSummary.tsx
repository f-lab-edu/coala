'use client';

import { useState } from 'react';

type Props = {
  coinName: string;
  className?: string;
};

export function CoinSummary({ coinName, className }: Props) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  // postBuyCoin 등등 user interaction은 client component에서
  return (
    <div className={className}>
      <div>{isBookmarked ? '*' : ''}</div>
      <div>{coinName}</div>
      <button onClick={() => setIsBookmarked((bookmarked) => !bookmarked)}>Toggle Bookmark</button>
    </div>
  );
}
