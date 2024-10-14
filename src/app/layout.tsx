import localFont from 'next/font/local';
import { ReactNode } from 'react';
import './globals.css';
import BottomNav from '@/_components/BottomNav';
import ReactQueryProvider from '@/_providers/ReactQueryProvider';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html data-theme="cmyk" lang="ko" className={pretendard.className}>
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <ReactQueryProvider>
        <div className="mx-auto min-h-screen w-full max-w-[600px] bg-white p-4">
          <main>{children}</main>
          <BottomNav />
        </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
