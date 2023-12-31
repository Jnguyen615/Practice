import { useNavigate, useParams } from 'react-router-dom';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import NavBar from '../NavBar/NavBar'
import './MountCardPage.scss';

const Modal = ({ closeModal, mounts, favoriteMounts, toggleFavoriteMount }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const mountId = parseInt(id);

  const mount = mounts.find(mount => mount.id === mountId);
  const isFavorite = favoriteMounts.some(favMount => favMount.id === mountId);

  const handleToggleFavorite = () => {
    toggleFavoriteMount(mount);
  };

  const handleModalClose = () => {
    closeModal();
    navigate('/');
  };

  return (
    <div className="modal">
      <NavBar /> 
    <div className="modal-header">
      <FavoriteIcon
        id={id}
        isFavorite={isFavorite}
        toggleFavoriteMount={handleToggleFavorite}
        mount={mount}
        favoriteMounts={favoriteMounts || []}
        className="favorite-icon"
      />
      <button className="close-btn" onClick={handleModalClose}>
        <i className="fa fa-close"></i>
      </button>
    </div>
      {mount && (
        <div className="modal-container">
          <h3 className="mount-name">{mount.name}</h3>
          <img src={mount.image} alt={mount.name} className="modal-image" />
          <p className="enhanced-description">{mount.enhanced_description}</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
