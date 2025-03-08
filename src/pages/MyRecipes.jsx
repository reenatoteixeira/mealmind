import { Helmet } from 'react-helmet-async';
import Header from '../components/Header.jsx';
import { useEffect, useState } from 'react';
import { DATABASE_SERVICE } from '../services/DatabaseService.js';
import { AUTH_SERVICE } from '../services/AuthService.js';
import RecipeCard from '../components/RecipeCard.jsx';
import PlaceholderRecipeCard from '../components/PlaceholderRecipeCard.jsx';
import { Link } from 'react-router-dom';

function MyRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipes() {
      const user = AUTH_SERVICE.getCurrentUser(),
        recipes = await DATABASE_SERVICE.getDocumentsByAttribute('recipes', 'userUid', '==', user.uid);

      setRecipes(recipes);

      const userPromises = recipes.map((recipe) => {
          return DATABASE_SERVICE.getDocumentsById('users', recipe.userUid);
        }),
        userData = await Promise.all(userPromises),
        usersMap = userData.reduce((acc, user, index) => {
          if (user) {
            acc[recipes[index].userUid] = user;
          }

          return acc;
        }, {});

      setUsers(usersMap);
      setLoading(false);
    }

    fetchRecipes();
  }, []);

  return (
    <>
      <Helmet>
        <title>MealMind | My Recipes</title>
        <meta name="description"
              content="View, edit, and share your personal recipe collection on MealMind. Keep track of your favorite dishes and explore new cooking ideas." />
        <meta property="og:title" content="MealMind | My Recipes" />
        <meta property="og:description"
              content="View, edit, and share your personal recipe collection on MealMind. Keep track of your favorite dishes and explore new cooking ideas." />
        <meta property="og:url" content="https://mealmind.pages.dev/recipes" />
        <link rel="canonical" href="https://mealmind.pages.dev/recipes" />
      </Helmet>

      <Header />

      <main className={'pt-30 text-stone-900 flex items-center justify-center'}>
        <section className={'container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>

          <div className={'flex flex-col justify-between gap-6 sm:flex-row sm:gap-20 sm:items-center'}>
            <div className={'w-fit'}>
              <h1 className={'text-2xl font-bold'}>Manage your recipes</h1>
              <p className={'text-stone-600'}>Create, view, and manage your personal recipes. Edit recipe details,
                change their visibility, and keep
                track of your favorite dishes.</p>
            </div>

            <Link to={'/new-recipe'}
                  className={'h-fit min-w-fit transition-all cursor-pointer rounded-md bg-red-600 px-3.5 py-3 text-lg text-stone-100 border-2 border-red-600 shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
              <i className={'uil uil-plus'}></i> Add recipe
            </Link>
          </div>

          <ul className={'flex py-10 flex-col gap-4'}>
            {loading ? (
              <>
                <PlaceholderRecipeCard />
                <PlaceholderRecipeCard />
              </>
            ) : recipes.length > 0 ? (
              recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} users={users} />
              ))
            ) : (
              <li
                className={'h-80 flex items-center justify-center rounded-2xl border-2 border-dashed border-stone-400 text-center text-lg text-stone-500'}>
                You haven't added any recipes yet</li>
            )}
          </ul>
        </section>
      </main>

    </>
  );
}

export default MyRecipes;
