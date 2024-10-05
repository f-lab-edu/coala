import localFont from 'next/font/local';
import { ReactNode } from 'react';
import './globals.css';
import BottomNav from '@/_components/BottomNav';
import Navbar from '@/_components/Navbar';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html data-theme="cmyk" lang="ko" className={pretendard.className}>
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <div className="mx-auto min-h-screen w-full max-w-[600px] bg-white p-4">
          <Navbar />
          <main className="pt-16">{children}</main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
