import { NavLink } from "react-router-dom"
import classes from './MainNavigation.module.css'

const changeActiveClass = ({isActive}) => isActive ? classes.active : undefined

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li><NavLink to="/" end className={changeActiveClass}>Home</NavLink></li>
          <li><NavLink to="/products" className={changeActiveClass}>Products</NavLink></li>
        </ul>
      </nav>     
    </header>
  )
}
