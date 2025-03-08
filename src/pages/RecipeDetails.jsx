import { Helmet } from 'react-helmet-async';
import Header from '../components/Header.jsx';
import { useEffect, useState } from 'react';
import { DATABASE_SERVICE } from '../services/DatabaseService.js';
import { AUTH_SERVICE } from '../services/AuthService.js';
import { useNavigate, useParams } from 'react-router-dom';

function RecipeDetails() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const currentUser = AUTH_SERVICE.getCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRecipe() {
      const recipeData = await DATABASE_SERVICE.getDocumentsById('recipes', recipeId);
      setRecipe(recipeData);
      setUpdatedTitle(recipeData.title);
      setUpdatedDescription(recipeData.description);
      setLoading(false);
    }

    fetchRecipe();
  }, [recipeId]);

  async function handleEdit() {
    try {
      await DATABASE_SERVICE.updateDocument('recipes', recipeId, {
        title: updatedTitle,
        description: updatedDescription,
      });
      setRecipe({ ...recipe, title: updatedTitle, description: updatedDescription });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  }

  async function handleDelete() {
    setLoading(true);

    try {
      await DATABASE_SERVICE.deleteDocument('recipes', recipeId);
      setLoading(false);
      navigate('/recipes');
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  }

  return (
    <>
      <Helmet>
        <title>MealMind | Recipe Details</title>
        <meta name="description"
              content="View the details of your selected recipe on MealMind. Explore ingredients, instructions, and more." />
        <meta property="og:title" content="MealMind | Recipe Details" />
        <meta property="og:description"
              content="View the details of your selected recipe on MealMind. Explore ingredients, instructions, and more." />
        <meta property="og:url" content="https://mealmind.pages.dev/recipes" />
        <link rel="canonical" href="https://mealmind.pages.dev/recipes" />
      </Helmet>

      <Header />

      <main className={'py-30 text-stone-900 flex items-center justify-center'}>
        <section className={'container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <div className={'flex flex-col gap-4 sm:gap-8'}>
                <img src={recipe.coverImg} alt={`${recipe.name} cover image`}
                     className={'w-full rounded-2xl shadow-lg'} />
                {isEditing ? (
                  <>
                    <input type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)}
                           className={'text-3xl sm:text-5xl logo-font font-bold px-3 py-2 bg-stone-200 text-stone-600 border-2 border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />

                    <textarea value={updatedDescription} rows={'5'}
                              onChange={(e) => setUpdatedDescription(e.target.value)}
                              className={'text-base sm:text-lg px-3 py-2 bg-stone-200 text-stone-600 border-2 border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />

                    <div className={'flex flex-col gap-4 sm:flex-row-reverse sm:justify-start'}>
                      <button onClick={handleEdit}
                              className={'transition-all cursor-pointer rounded-md bg-red-600 px-3.5 py-1 text-lg text-stone-100 border-2 border-red-600 shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
                        Save
                      </button>

                      <button onClick={() => setIsEditing(false)}
                              className={'transition-all cursor-pointer rounded-md px-3.5 py-1 text-lg text-red-600 border-2 border-red-600 shadow-xs hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className={'text-3xl sm:text-5xl logo-font font-bold'}>{recipe.title}</h1>
                    <p className={'text-base sm:text-lg'}>{recipe.description}</p>
                {currentUser.uid === recipe.userUid && (
                  <>
                    <div className={'flex flex-col gap-4 sm:flex-row-reverse sm:justify-start'}>
                      <button onClick={() => setIsEditing(true)}
                              className={'transition-all cursor-pointer rounded-md bg-red-600 px-3.5 py-1 text-lg text-stone-100 border-2 border-red-600 shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
                        Edit
                      </button>

                      <button onClick={handleDelete}
                        className={'transition-all cursor-pointer rounded-md px-3.5 py-1 text-lg text-red-600 border-2 border-red-600 shadow-xs hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
                        Delete
                      </button>
                    </div>
                  </>
                )}
                  </>
                )}
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default RecipeDetails;