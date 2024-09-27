import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html data-theme="cmyk" lang="ko">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <div className="mx-auto min-h-screen w-full max-w-[600px] bg-white p-4">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
