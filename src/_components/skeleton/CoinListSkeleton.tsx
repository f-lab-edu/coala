import React from 'react';

type SkeletonProps = {
  length?: number;
};

export default function CoinListSkeleton({ length = 5 }: SkeletonProps) {
  return (
    <div className="flex flex-col space-y-6">
      {Array.from({ length }).map((_, index) => (
        <div key={index} className="flex items-center justify-between space-x-4">
          {index !== 0 && <div className="skeleton h-10 w-10 rounded-full"></div>}
          <div className="flex-1">
            <div className="skeleton mb-2 h-4 w-20"></div>
            <div className="skeleton h-4 w-32"></div>
          </div>
          <div className="text-right">
            <div className="skeleton mb-2 h-4 w-16"></div>
            <div className="skeleton h-4 w-12"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
