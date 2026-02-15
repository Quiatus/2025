import classes from './EventsNavigation.module.css';
import { NavLink } from "react-router-dom"

function EventsNavigation() {
  const changeActiveClass = ({isActive}) => isActive ? classes.active : undefined

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" end className={changeActiveClass}>All Events</NavLink>
          </li>
          <li>
            <NavLink to="/events/new" className={changeActiveClass}>New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
