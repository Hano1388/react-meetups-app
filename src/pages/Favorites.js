import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  let content;

  if (favorites.length === 0) {
    content = (
      <p>
        You don't have any favorite meetups at the moment, checkout{' '}
        <Link to="/">here</Link> to find your favorite meetups
      </p>
    );
  } else {
    content = <MeetupList meetups={favorites} />;
  }

  return (
    <section>
      <h1>Favorite Meetups</h1>
      {content}
    </section>
  );
};

export default Favorites;
