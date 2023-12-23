import React from 'react';
import { useNavigate } from 'react-router-dom'
import MountCard from '../MountCard/MountCard';

const FavoritesPage = ({ favoriteMounts, toggleFavoriteMount }) => {
  const navigate = useNavigate()
  const displayFavoriteMounts = favoriteMounts.map((mount) => (
    <MountCard
      key={`${mount.id}-${mount.name}`} 
      id={mount.id}
      name={mount.name}
      image={mount.image}
      description={mount.description}
      favoriteMounts={favoriteMounts}
      toggleFavoriteMount={toggleFavoriteMount}
      isFavoritesPage={true} 
    />
  ));

  const navigateToMain = () => {
    navigate('/')
  }
  return (
    <div className='favorites-page'>
       <button onClick={navigateToMain}>
        {" "}
        <i className="fa fa-close"></i>{" "}
      </button>
      <h1>Favorites!</h1>
      {!displayFavoriteMounts.length && (
        <p className='no-favorites'>You don't have any favorites yet.</p>
      )}
      <div className='favorites-container'>{displayFavoriteMounts}</div>
    </div>
  );
};

export default FavoritesPage;
