import { AUTH_SERVICE } from '../../services/AuthService.js';
import { useNavigate } from 'react-router-dom';

function useLogout() {
  const navigate = useNavigate();

  async function logout() {
    navigate('/');
    await AUTH_SERVICE.logout();
  }

  return logout;
}

export default useLogout;
