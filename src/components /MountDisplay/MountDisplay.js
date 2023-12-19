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
    <div key={mount.id}>
      <MountCard
        id={mount.id}
        name={mount.name}
        image={mount.image} onClick={() => handleCardClick(mount.id)}
        description={mount.description}
        openModal={openModal}
        favoriteMounts={favoriteMounts}
        setFavoriteMounts={setFavoriteMounts}
        toggleFavoriteMount={(id) => toggleFavoriteMount(id)} 
        />
    </div>
  ));

  return (
    <div className="mounts-container">
      {mountCards}
    </div>
  );
};

export default MountDisplay;
