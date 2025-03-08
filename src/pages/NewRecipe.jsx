import { Helmet } from 'react-helmet-async';
import Header from '../components/Header.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useNewRecipe from '../hooks/recipes/useNewRecipe.js';

function NewRecipe() {
  const { createRecipe, loading, error } = useNewRecipe();
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeVisibility, setRecipeVisibility] = useState('true');
  const [recipeDescription, setRecipeDescription] = useState('');

  async function handleRecipeCreation(e) {
    e.preventDefault();

    await createRecipe(recipeTitle, recipeDescription, recipeVisibility);
  }

  return (
    <>
      <Helmet>
        <title>MealMind | New Recipe</title>
        <meta name="description"
              content="Add your own recipes to MealMind. Share your favorite dishes and contribute to our growing recipe collection." />
        <meta property="og:title" content="MealMind | New Recipe" />
        <meta property="og:description"
              content="Add your own recipes to MealMind. Share your favorite dishes and contribute to our growing recipe collection." />
        <meta property="og:url" content="https://mealmind.pages.dev/new-recipe" />
        <link rel="canonical" href="https://mealmind.pages.dev/new-recipe" />
      </Helmet>

      <Header />

      <main className={'pt-30 text-stone-900 flex items-center justify-center'}>
        <section className={'container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
          <div className={'flex flex-col justify-between gap-6 sm:flex-row sm:gap-20 sm:items-center'}>
            <div className={'w-fit'}>
              <h1 className={'text-2xl font-bold'}>Add your new recipe</h1>
              <p className={'text-stone-600'}>Share your culinary creations with the MealMind community. Fill in the
                details below to add a new recipe to your collection.</p>
            </div>
          </div>

          <div className={'py-5'}>

            {error &&
              <div className={'px-4 py-2 rounded-md bg-red-100 text-red-800'}>
                <p>{error}</p>
              </div>
            }

            <form onSubmit={handleRecipeCreation} className={'py-5 space-y-4'}>
              <div className={'flex flex-col gap-4 sm:flex-row'}>
                <div className={'w-full flex flex-col'}>
                  <label htmlFor={'recipe-title'} className={'w-full'}>Title</label>
                  <input id={'recipe-title'} type={'text'} placeholder={'Chocolate Mug Cake'} required
                         onChange={e => setRecipeTitle(e.target.value)}
                         className={'h-11 w-full px-3 py-2 bg-stone-200 text-stone-600 border-2 border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />
                </div>

                <div className={'w-full flex flex-col sm:max-w-xs'}>
                  <label htmlFor={'recipe-visibility'} className={'w-full'}>Visibility</label>
                  <select id={'recipe-visibility'} onChange={e => setRecipeVisibility(e.target.value)}
                          className={'h-11 w-full px-3 py-2 bg-stone-200 text-stone-600 border-2 border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'}>
                    <option value={'true'}>Public</option>
                    <option value={'false'}>Private</option>
                  </select>

                  <span
                    className={'text-sm text-stone-400 mt-1 ml-2 min-w-fit'}>Public recipes appear on MealMind Feed</span>
                </div>
              </div>

              <div className={'w-full flex flex-col'}>
                <label htmlFor={'recipe-description'} className={'w-full'}>Description</label>
                <textarea required onChange={e => setRecipeDescription(e.target.value)}
                          className={'w-full px-3 py-2 bg-stone-200 text-stone-600 border-2 border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'}
                          name="recipe-description" id="recipe-description" rows="5"
                          placeholder={'Tell a little bit about your recipe...'} />
              </div>

              <div className={'w-full flex justify-end gap-4'}>
                <Link to={'/recipes'}
                      className={'transition-all cursor-pointer rounded-md px-3.5 py-1 text-lg text-red-600 border-2 border-red-600 shadow-xs hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
                  Cancel
                </Link>

                <button type={'submit'} disabled={loading}
                        className={'transition-all cursor-pointer rounded-md bg-red-600 px-3.5 py-1 text-lg text-stone-100 border-2 border-red-600 shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
                  {loading ? 'Saving...' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default NewRecipe;
