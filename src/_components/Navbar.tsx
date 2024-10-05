'use client';
import { usePathname } from 'next/navigation';
import { ArrowLeftIcon } from './Icons';

// TODO 상단에 고정시켜야 할듯.
export default function Navbar() {
  const pathName = usePathname();

  // Todo customhook
  const pathSegments = pathName.split('/');
  const lastSegment = pathSegments[pathSegments.length - 1];

  let currentPageName = '';
  if (pathName === '/') {
    currentPageName = 'Coala';
  } else if (pathName.startsWith('/exchange')) {
    currentPageName = '거래소';
  } else if (pathName.startsWith('/coin')) {
    currentPageName = lastSegment;
  } else if (pathName.startsWith('/profile')) {
    currentPageName = '프로필';
  }

  return (
    <div className="navbar mb-1 bg-base-100">
      <div className="navbar-start">
        {/* history 존재할때만... / router 객체에서 받아올 수 있는지?   */}
        <button className="btn btn-circle btn-ghost" onClick={() => window.history.back()}>
          <ArrowLeftIcon />
        </button>
      </div>
      <div className="navbar-center cursor-default">
        {/* 현재 페이지 이름 표시 */}
        <span className="text-lg font-bold">{currentPageName}</span>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
