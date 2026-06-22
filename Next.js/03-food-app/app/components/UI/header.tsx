import Link from "next/link";
import logo from '@/assets/logo.png'
import styles from './header.module.css'
import Image from "next/image";
import NavLink from "./nav-link";
import Svg from "./svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="header-background">
          <Svg />
      </div>
      <Link className={styles.logo} href="/">
        <Image src={logo} alt="Logo" priority/>
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Our Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
