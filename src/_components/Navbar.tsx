'use client';
import { PAGE_NAMES } from '@/_constants/pageNames';
import { usePathname, useRouter, useSelectedLayoutSegments } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowLeftIcon } from './Icons';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const layoutSegments = useSelectedLayoutSegments();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(pathname !== '/');
  }, [pathname]);

  const currentPageName = PAGE_NAMES[pathname] || layoutSegments.pop();

  return (
    <div className="navbar fixed left-0 right-0 top-0 z-50 mx-auto max-w-[600px]">
      <div className="navbar-start">
        {canGoBack && (
          <button className="btn btn-circle btn-ghost" onClick={() => router.back()}>
            <ArrowLeftIcon />
          </button>
        )}
      </div>
      <div className="navbar-center cursor-default">
        <span className="text-lg font-bold">{currentPageName}</span>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
