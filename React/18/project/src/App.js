import Counter from './components/Counter';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import { useSelector } from 'react-redux'

export default function App() {
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated)

  return (
    <>
      <Header />
      {isLoggedIn ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}