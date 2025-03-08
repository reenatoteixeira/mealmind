import { useState } from 'react';
import { AUTH_SERVICE } from '../../services/AuthService.js';
import { DATABASE_SERVICE } from '../../services/DatabaseService.js';
import { useNavigate } from 'react-router-dom';
import { serverTimestamp } from 'firebase/firestore';

function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function register(email, password, passwordCheck, firstName, lastName) {
    setLoading(true);
    setError(null);

    if (password !== passwordCheck) {
      setError('Passwords must match');
      setLoading(false);
      return;
    }

    try {
      const USER_CREDENTIAL = await AUTH_SERVICE.register(email, password, firstName, lastName),
        user = USER_CREDENTIAL.user;

      await DATABASE_SERVICE.setDocumentWithId('users', user.uid, {
        userUid: user.uid,
        email: email,
        firstName: firstName,
        lastName: lastName,
        displayName: user.displayName,
        profilePicture: null,
        registeredAt: serverTimestamp(),
        lastUpdate: serverTimestamp(),
        createdRecipes: {
          total: 0,
          items: [],
        },
        likedRecipes: {
          total: 0,
          items: [],
        },
        comments: {
          total: 0,
          items: [],
        },
      });

      navigate('/');
      return user;

    } catch (error) {
      console.error('Error during registration', error);
      setError(AUTH_SERVICE.getAuthErrorMessage(error.code));

    } finally {
      setLoading(false);
    }
  }

  return { register, loading, error };
}

export default useRegister;
