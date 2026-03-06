import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from  './main-headedr.module.css'
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="Logo" priority />
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
