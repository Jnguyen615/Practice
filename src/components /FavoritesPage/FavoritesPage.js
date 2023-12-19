import './FavoritesPage.scss';
import MountCard from '../MountCard/MountCard';
import PropTypes from 'prop-types';

const FavoritesPage = ({ favoriteMounts, setFavoriteMounts, toggleFavoriteMount, navigateTo }) => {

  const cards = favoriteMounts.map(mount => (
    <MountCard
      key={mount.id}
      name={mount.name}
      favoriteMounts={favoriteMounts}
      toggleFavoriteMount={toggleFavoriteMount}
    />
  ));

  const goToRoute = (route) => {
    navigateTo(route); // Use the navigateTo function to navigate
  };

  return (
    <div className='favorites-page'>
      <h1>Favorites!</h1>
      {!cards.length && (
        <p className='no-favorites'>You don't have any favorites yet.</p>
      )}
      <div className='favorites-container'>
        {cards}
        <button onClick={() => goToRoute('/')}>Go to Home</button>
      </div>
    </div>
  );
};

FavoritesPage.propTypes = {
  favoriteMounts: PropTypes.array,
};

export default FavoritesPage;
