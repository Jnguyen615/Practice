import "./MountCard.scss";
import PropTypes from 'prop-types'

const MountCard = ({
  id,
  name,
  image,
  description,
  onClick,
  openModal,
  favoriteMounts,
  setFavoriteMounts,
  toggleFavoriteMount,
}) => {
  const handleCardClick = () => {
    onClick(id); // Open modal when the card is clicked
  };

  

  const handleFavoriteToggle = (e) => {
    e.stopPropagation(); // Prevent event bubbling to the card click
    toggleFavoriteMount(id); // Toggle favorite when the favorite button is clicked
  };

  return (
    <div className="mount-card" onClick={handleCardClick}>
      <h3>{name}</h3>
      <p>{description}</p>
      <img id={id} src={image} alt={name} className="mount-card-image" />
      <button onClick={handleFavoriteToggle}>
        {favoriteMounts ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
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

export default MountCard