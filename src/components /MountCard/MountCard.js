import React from 'react';
import PropTypes from 'prop-types';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';


const MountCard = ({
  id,
  name,
  image,
  description,
  mount,
  onClick,
  favoriteMounts,
  toggleFavoriteMount,
  showFavoriteIcon,
}) => {

  const isFavorite = favoriteMounts.includes(id);

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="mount-card">
      <h3 className='mount-name'>{name}</h3>
      <img
        id={id}
        src={image}
        alt={name}
        className="mount-card-image"
        onClick={handleOnClick} 
      />
      <p className='mount-description'>{description}</p>
      <FavoriteIcon
        id={id}
        isFavorite={isFavorite}
        toggleFavoriteMount={() => toggleFavoriteMount(mount)}
      />
    </div>
  );
};

MountCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  favoriteMounts: PropTypes.array.isRequired,
  toggleFavoriteMount: PropTypes.func.isRequired,
};

export default MountCard;

