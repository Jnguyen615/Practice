import './ErrorPage.scss';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate('/')
  }
  return (
    <main className="error-page">
      <h1>Oops! Something went wrong, please go back.</h1>
        <button onClick={handleHomeClick}>Home</button>
      
    </main>
  );
};

export default ErrorPage;
