import { Form, NavLink, useRouteLoaderData } from "react-router-dom"
import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

const changeActiveClass = ({isActive}) => isActive ? classes.active : undefined

function MainNavigation() {
  const token = useRouteLoaderData('root') 

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li><NavLink to="/" end className={changeActiveClass}>Home</NavLink></li>
          <li><NavLink to="/events" className={changeActiveClass}>Events</NavLink></li>
          <li><NavLink to="/newsletter" className={changeActiveClass}>Newsletter</NavLink></li>
          {!token && <li><NavLink to="/auth?mode=login" className={changeActiveClass}>Login</NavLink></li>}
          {token && <li><Form action="/logout" method="post"><button className={classes.btnLink}>Logout</button></Form></li>}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;