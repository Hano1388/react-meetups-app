import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups App</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorite Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
