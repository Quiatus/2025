import './globals.css';
import Svg from './components/svg';
import MainHeader from './components/main-header';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Svg />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
