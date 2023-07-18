import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <section>
      <h1>Favorite Meetups</h1>
      <MeetupList meetups={favorites} />
    </section>
  );
};

export default Favorites;
