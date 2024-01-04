import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MountCard from '../MountCard/MountCard';
import './FavoritesPage.scss';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

const FavoritesPage = ({ favoriteMounts, toggleFavoriteMount }) => {
  const [isFavoritesPage] = useState(true);
  const [isOnFavoritesPage] = useState(true);
  const navigate = useNavigate();

  const displayFavoriteMounts = favoriteMounts.map(mount => (
    <MountCard
      key={`${mount.id}-${mount.name}`}
      id={mount.id}
      name={mount.name}
      image={mount.image}
      description={mount.description}
      favoriteMounts={favoriteMounts}
      toggleFavoriteMount={toggleFavoriteMount}
      isFavoritesPage={true}
      isOnFavoritesPage={true}
    />
  ));

  const navigateToMain = () => {
    navigate('/');
  };

  return (
    <div className="favorites-page">
      <button className='back-to-all-btn' onClick={navigateToMain}>Back to All Mounts</button>
      <h1 className="my-mounts-title">My Mounts!</h1>
      {!displayFavoriteMounts.length && (
        <p className="no-favorites">
          You don't have any mounts yet, go Back to All mounts and add some!
        </p>
      )}
      <div className="favorites-container">{displayFavoriteMounts}</div>
    </div>
  );
};

export default FavoritesPage;
