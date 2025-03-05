import { useState } from 'react';
import { AUTH_SERVICE } from '../services/AuthService.js';
import { useNavigate } from 'react-router-dom';

function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function login(email, password) {
    setLoading(true);
    setError(null);

    try {
      const USER_CREDENTIAL = await AUTH_SERVICE.login(email, password);
      navigate('/');
      return USER_CREDENTIAL.user;
    } catch (error) {
      setError(AUTH_SERVICE.getAuthErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  }

  return { login, loading, error };
}

export default useLogin;
