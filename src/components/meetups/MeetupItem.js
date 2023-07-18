import { useContext } from 'react';

import classNames from './MeetupItem.module.css';
import Card from '../wrappers/Card';
import FavoritesContext from '../../store/favorites-context';

const MeetupItem = (props) => {
  const { addToFavorites, removeFromFavorites, isItemFavorited } =
    useContext(FavoritesContext);

  const isFavorited = isItemFavorited(props.id);

  const onToggleFavoritesHandler = () => {
    if (isFavorited) {
      removeFromFavorites(props.id);
    } else {
      const { id, title, image, description } = props;
      addToFavorites({
        id,
        title,
        image,
        description,
      });
    }
  };

  return (
    <li className={classNames.item}>
      <Card>
        <div className={classNames.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={classNames.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classNames.actions}>
          <button onClick={onToggleFavoritesHandler}>
            {isFavorited ? 'Remove From Favorites' : 'Add To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
