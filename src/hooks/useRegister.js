import { useState } from 'react';
import { AUTH_SERVICE } from '../services/AuthService.js';
import { useNavigate } from 'react-router-dom';

function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function register(email, password, passwordCheck, firstName, lastName) {
    setLoading(true);
    setError(null);

    if (password !== passwordCheck) {
      setError('Passwords must match');
      return;
    }

    try {
      const USER_CREDENTIAL = await AUTH_SERVICE.register(email, password, firstName, lastName);
      navigate('/');
      return USER_CREDENTIAL.user;
    } catch (error) {
      setError(AUTH_SERVICE.getAuthErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  }

  return { register, loading, error };
}

export default useRegister;
