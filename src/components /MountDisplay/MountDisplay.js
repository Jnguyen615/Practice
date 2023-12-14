import "./MountDisplay.scss";
import MountCard from "../MountCard/MountCard";
import { useNavigate } from 'react-router-dom'

const MountDisplay = ({ mounts, openModal, favoriteMounts, toggleFavoriteMount, setFavoriteMounts }) => {
  const navigate = useNavigate()
  const handleCardClick = (mountId) => {
    openModal(mountId)
    navigate('/:id')
  };

  const mountCards = mounts.map((mount) => (
    <div key={mount.id} onClick={() => handleCardClick(mount.id)}>
      <MountCard
        id={mount.id}
        name={mount.name}
        image={mount.image}
        description={mount.description}
        openModal={openModal}
        onClick={() => handleCardClick(mount.id)}
        favoriteMounts={favoriteMounts}
        setFavoriteMoutns={setFavoriteMounts}
        toggleFavoriteMount={toggleFavoriteMount}
      />
    </div>
  ));

  return (
    <div className="mounts-container">
      <h2>Mounts here!</h2>
      {mountCards}
    </div>
  );
};

export default MountDisplay;
