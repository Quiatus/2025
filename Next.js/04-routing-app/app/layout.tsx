import { ReactNode } from 'react';
import './globals.css';
import MainHeader from './components/header';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
 return (
    <html lang="en">
      <body>
        <div id='page'>
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  )
}
