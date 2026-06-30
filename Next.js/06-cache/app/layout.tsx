import Header from '@/components/header';
import './globals.css';
import { ReactNode } from 'react';

interface RootProps {
  children: ReactNode
}

export const metadata = {
  title: 'Next.js Caching',
  description: 'Learn how Next.js caching works',
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
