import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { retrieveMinions, retrieveMounts } from "./Api-call";
import Header from "./components /Header/Header";
import NavBar from "./components /NavBar/NavBar";
import Modal from "./components /Modal/Modal";
import MountDisplay from "./components /MountDisplay/MountDisplay";
import ErrorPage from "./components /ErrorPage/ErrorPage";
import FavoritesPage from "./components /FavoritesPage/FavoritesPage";
import FFXIVLogo from './components /FFXIVLogo/FFXIVLogo'

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
        console.log("MOUNTS:", data);
      })
      .catch(error => {
        console.error("Error fetching mounts data:", error);
      });
  }, []);

  useEffect(() => {
    retrieveMinions()
      .then(data => {
        setMinions(data);
        console.log("MINIONS:", data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleFavoriteMount = (id) => {
    if (favoriteMounts.includes(id)) {
      const updatedFavorites = favoriteMounts.filter((favId) => favId !== id);
      setFavoriteMounts(updatedFavorites);
    } else {
      setFavoriteMounts([...favoriteMounts, id]);
      console.log(favoriteMounts)
    }
  };

  return (
    <main className="App">
      <Header />
      <NavBar />
      <FFXIVLogo />
      <Routes>
        <Route path="/" element={<MountDisplay 
        mounts={mounts} openModal={openModal} favoriteMounts={favoriteMounts} toggleFavoriteMount={toggleFavoriteMount}/>} />
        <Route path="/:id" element={<Modal openModal={openModal} closeModal={closeModal} selectedMountId={selectedMountId} mounts={mounts}/>} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/favorites" element={<FavoritesPage/>} favoriteMounts={favoriteMounts} setFavoriteMounts={setFavoriteMounts} toggleFavoriteMount={toggleFavoriteMount}/>
      </Routes>
    </main>
  );
}

export default App;
