import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addToFavorites: (_meetup) => {},
  removeFromFavorites: (_meetupId) => {},
  isItemFavorited: (_meetupId) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addToFavoritesHandler = (newFavoriteMeetup) => {
    setUserFavorites((favorites) => {
      return [...favorites, newFavoriteMeetup];
    });
  };

  const removeFromFavoritesHandler = (favoriteMeetupId) => {
    setUserFavorites((favorites) => {
      return favorites.filter(
        (favoriteMeetup) => favoriteMeetup.id !== favoriteMeetupId
      );
    });
  };

  const itemIsFavoriteHandler = (itemId) => {
    return userFavorites.some((favorite) => favorite.id === itemId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addToFavorites: addToFavoritesHandler,
    removeFromFavorites: removeFromFavoritesHandler,
    isItemFavorited: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
