import { AUTH_SERVICE } from '../services/AuthService.js';
import { useNavigate } from 'react-router-dom';

function useLogout() {
  const navigate = useNavigate();

  function logout() {
    AUTH_SERVICE.logout()
      .then(() => {
        navigate('/');
      });
  }

  return logout;
}

export default useLogout;
