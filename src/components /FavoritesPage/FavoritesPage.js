
import React from 'react';
import MountCard from '../MountCard/MountCard';

const FavoritesPage = ({ favoriteMounts, toggleFavoriteMount }) => {
  const displayFavoriteMounts = favoriteMounts.map(mount => (
    <MountCard
    key={`${mount.id}-${mount.name}`} 
    id={mount.id}
    name={mount.name}
    image={mount.image}
    description={mount.description}
    favoriteMounts={favoriteMounts}
    toggleFavoriteMount={toggleFavoriteMount}
    />
    ));

  return (
    <div className='favorites-page'>
      <h1>Favorites!</h1>
      {!displayFavoriteMounts.length && (
        <p className='no-favorites'>You don't have any favorites yet.</p>
      )}
      <div className='favorites-container'>{displayFavoriteMounts}</div>
    </div>
  );
};

export default FavoritesPage;
