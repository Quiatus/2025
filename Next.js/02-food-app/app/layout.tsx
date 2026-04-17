import { ReactNode } from 'react';
import './globals.css'

type Props = {
  children: ReactNode
}

export const metadata = {
  title: 'NextJS Course App',
  description: 'Food App',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
