import Link from "next/link";
import logo from '@/assets/logo.png'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <img src={logo.src} alt="Logo"/>
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Our Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
