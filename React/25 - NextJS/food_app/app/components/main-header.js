import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from  './main-headedr.module.css'

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logoImg.src} alt="Logo" />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
            <Link href="/community">Meal Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
