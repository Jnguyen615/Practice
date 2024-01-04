import "./MountDisplay.scss";
import MountCard from "../MountCard/MountCard";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import NavBar from '../NavBar/NavBar';

const MountDisplay = ({ mounts, favoriteMounts, toggleFavoriteMount, setFavoriteMounts }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMountId, setSelectedMountId] = useState(null);
  const navigate = useNavigate()

  const openModal = (mountId) => {
    setSelectedMountId(mountId);
    setIsModalOpen(true);
    navigate(`/mount/${mountId}`)
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/')
  };

  const handleCardClick = (mountId) => {
    openModal(mountId)
  };

  const handleFavoriteToggle = (mount) => {
    toggleFavoriteMount(mount);
  };

  const mountCards = mounts.map((mount) => (
    <div key={`${mount.id}-${mount.name}`} >
      <MountCard
        id={mount.id}
        name={mount.name}
        image={mount.image} onClick={() => handleCardClick(mount.id)}
        description={mount.description}
        isFavoritesPage={false}
        favoriteMounts={favoriteMounts}
        // setFavoriteMounts={setFavoriteMounts}
        toggleFavoriteMount={(id) => toggleFavoriteMount(id)} 
        mount={mount}
        onFavoriteToggle={() => handleFavoriteToggle(mount)}
        />
    </div>
  ));

  return (
    <div> 
    <NavBar /> 
    <div className="mounts-container">

      {mountCards}
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          selectedMountId={selectedMountId}
          mounts={mounts}
          favoriteMounts={favoriteMounts}
          toggleFavoriteMount={toggleFavoriteMount}
          setFavoriteMounts={setFavoriteMounts}
        />
      )}
    </div>
    </div>
  );
};

export default MountDisplay;
