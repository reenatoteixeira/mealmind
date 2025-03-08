import { useState } from 'react';
import { AUTH_SERVICE } from '../../services/AuthService.js';
import { DATABASE_SERVICE } from '../../services/DatabaseService.js';
import { useNavigate } from 'react-router-dom';
import { serverTimestamp } from 'firebase/firestore';

function useNewRecipe() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function createRecipe(recipeTitle, recipeDescription, recipeVisibility) {
    setLoading(true);
    setError(null);

    try {
      const user = AUTH_SERVICE.getCurrentUser();

      await DATABASE_SERVICE.setDocument('recipes', {
        title: recipeTitle,
        description: recipeDescription,
        isPublic: recipeVisibility === 'true',
        userUid: user.uid,
        createdAt: serverTimestamp(),
        comments: 0,
        likes: 0,
        coverImg: 'https://firebasestorage.googleapis.com/v0/b/meal-mind---stage.firebasestorage.app/o/recipe-cover-placeholder.png?alt=media&token=c90d9afe-164a-40c1-bb7d-cd1da23bc088',
        lastUpdate: serverTimestamp(),
      });

      navigate('/recipes');

    } catch (error) {
      console.error(error);
      setError(error.code);

    } finally {
      setLoading(false);
    }
  }

  return { createRecipe, loading, error };
}

export default useNewRecipe;
