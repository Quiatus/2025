import { ReactNode } from 'react';
import './globals.css';
import Svg from './components/UI/svg';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props ) {
  return (
    <html lang="en">
      <body>
        <div className="header-background">
          <Svg />
        </div>
        {children}
      </body>
    </html>
  );
}