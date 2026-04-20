import { ReactNode } from 'react';
import Svg from "./components/UI/svg";
import './globals.css';
import Header from './components/UI/header';

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
        <Header />
        {children}
      </body>
    </html>
  );
}