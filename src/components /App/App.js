import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { retrieveMinions, retrieveMounts } from '../../Api-call';
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar';
import Modal from "../Modal/Modal";
import MountDisplay from "../MountDisplay/MountDisplay";
import ErrorPage from "../ErrorPage/ErrorPage";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo'

function App() {
  const [minions, setMinions] = useState([]);
  const [mounts, setMounts] = useState([]);
  const [favoriteMounts, setFavoriteMounts] = useState([]);
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMountId, setSelectedMountId] = useState(null);
  const navigate = useNavigate()
 
  const openModal = (id) => {
    setSelectedMountId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/')
  };

  useEffect(() => {
    retrieveMounts()
      .then(data => {
        setMounts(data);
        // console.log("MOUNTS:", data);
      })
      .catch(error => {
        console.error("Error fetching mounts data:", error);
      });
  }, []);

  // useEffect(() => {
  //   retrieveMinions()
  //     .then(data => {
  //       setMinions(data);
  //       console.log("MINIONS:", data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  const toggleFavoriteMount = (mount) => {
    const isFavorited = favoriteMounts.some((favMount) => favMount.id === mount.id);
  
    if (isFavorited) {
      setFavoriteMounts((prev) =>
        prev.filter((favMount) => favMount.id !== mount.id)
      );
      console.log('Removed from Favorites:', mount);
      console.log('Updated Favorites:', favoriteMounts);
    } else {
      setFavoriteMounts((prevFavorites) => [...prevFavorites, mount]);
      console.log('Added to Favorites:', mount);
      console.log('Updated Favorites:', [...favoriteMounts, mount]);
    }
  };
  
  
    
  
  

  
  
  
  return (
    <main className="App">
  <Header />
  <NavBar />
  <FFXIVLogo />
  <Routes>
    <Route
      path="/"
      element={
        <MountDisplay
          mounts={mounts}
          openModal={openModal}
          favoriteMounts={favoriteMounts}
          toggleFavoriteMount={toggleFavoriteMount}
        />
      }
    />
    <Route
      path="/:id"
      element={
        <Modal
          openModal={openModal}
          closeModal={closeModal}
          selectedMountId={selectedMountId}
          mounts={mounts}
          toggleFavoriteMount={toggleFavoriteMount}
        />
      }
    />
    <Route path="*" element={<ErrorPage />} />
    <Route
      path="/favorites"
      element={
        <FavoritesPage
          favoriteMounts={favoriteMounts}
          setFavoriteMounts={setFavoriteMounts}
          toggleFavoriteMount={toggleFavoriteMount}
          
        />
      }
    />
  </Routes>
</main>

  );
}

export default App;