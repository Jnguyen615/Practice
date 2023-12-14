import "./Logo.scss";
import chocobo from "../../Images/Chocobo.png";
const Logo = () => {
  return (
    <div className="icon">
      <img src={chocobo} className='chocobo-icon' alt="chocobo-image" />
    </div>
  );
};

export default Logo
