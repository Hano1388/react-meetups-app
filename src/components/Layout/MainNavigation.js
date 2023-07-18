import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classNames from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

const MainNavigation = () => {
  const { totalFavorites } = useContext(FavoritesContext);
  return (
    <header className={classNames.header}>
      <div className={classNames.logo}>Meetups App</div>
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
            <span className={classNames.badge}>{totalFavorites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
