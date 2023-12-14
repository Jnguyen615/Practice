import "./NavBar.scss";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleMountsClick = () => {
    navigate('/'); 
  };

  const handleFavoritesClick = () => {
    navigate('/favorites'); 
  };

  return (
    <div className="nav-side-bar">
      <button onClick={handleMountsClick}>Mounts</button>
      <button onClick={handleFavoritesClick}>Favorites</button>
    </div>
  );
};

export default NavBar;
