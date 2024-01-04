import { useNavigate, useParams } from "react-router-dom";
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

const Modal = ({ closeModal, selectedMountId, mounts, favoriteMounts, toggleFavoriteMount }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const mount = mounts.find(mount => mount.id === selectedMountId);
  const isFavorite = favoriteMounts.some(favMount => favMount.id === selectedMountId);

  const handleToggleFavorite = () => {
    toggleFavoriteMount(mount); // Call the function to toggle favorite status
  };

  return (
    <div className="modal">
      <button onClick={closeModal}>
        <i className="fa fa-close"></i>
      </button>
      {mount && (
        <div>
          <h3>{mount.name}</h3>
          <img src={mount.image} alt={mount.name} className="modal-image" />
          <p className='enhanced-description'>{mount.enhanced_description}</p>
          <FavoriteIcon
            id={selectedMountId}
            isFavorite={isFavorite}
            toggleFavoriteMount={handleToggleFavorite}
            mount={mount}
            favoriteMounts={favoriteMounts || []}
          />
        </div>
      )}
    </div>
  );
};

export default Modal;
