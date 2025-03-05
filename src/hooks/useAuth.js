import { useEffect, useState } from 'react';
import { AUTH_SERVICE } from '../services/AuthService.js';
import { onAuthStateChanged } from 'firebase/auth';

function useAuth() {
  const [user, setUser] = useState(null);
  const auth = AUTH_SERVICE.auth;

  useEffect(() => {
    return onAuthStateChanged(AUTH_SERVICE.auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  return user;
}

export default useAuth;
