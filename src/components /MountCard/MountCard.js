import React from 'react';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import PropTypes from 'prop-types';

const MountCard = ({
  id,
  name,
  image,
  description,
  onClick,
  favoriteMounts,
  toggleFavoriteMount,
}) => {
  const isFavorite = favoriteMounts.includes(id);

  return (
    <div className="mount-card">
      <h3 className='mount-name'>{name}</h3>
      <img
        id={id}
        src={image}
        alt={name}
        className="mount-card-image"
        onClick={onClick}
      />
      <p className='mount-description'>{description}</p>
      <FavoriteIcon
        id={id}
        isFavorite={isFavorite}
        toggleFavoriteMount={() => toggleFavoriteMount(id)}
      />
    </div>
  );
};

MountCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  favoriteMounts: PropTypes.array.isRequired,
  toggleFavoriteMount: PropTypes.func.isRequired,
};

export default MountCard;
