import { NavLink } from "react-router-dom"
import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

const changeActiveClass = ({isActive}) => isActive ? classes.active : undefined

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li><NavLink to="/" end className={changeActiveClass}>Home</NavLink></li>
          <li><NavLink to="/events" className={changeActiveClass}>Events</NavLink></li>
          <li><NavLink to="/newsletter" className={changeActiveClass}>Newsletter</NavLink></li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;