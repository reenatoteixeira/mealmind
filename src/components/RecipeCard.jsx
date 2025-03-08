import { Link } from 'react-router-dom';
import { formatDate } from '../services/functions.js';

function RecipeCard(props) {
  const recipe = props.recipe,
    users = props.users;

  return (
    <>
      <li>
        <Link to={`/recipes/${recipe.id}`}
              className={'flex flex-col min-h-60 bg-white border-1 border-stone-200 shadow-md shadow-stone-300 rounded-xl transition duration-500 sm:flex-row hover:scale-103'}>
          <div style={{ backgroundImage: `url(${recipe.coverImg})` }}
               className={`bg-center bg-no-repeat bg-cover w-full h-50 rounded-t-lg bg-stone-300 sm:h-auto sm:max-w-3xs sm:rounded-l-lg sm:rounded-t-none`}></div>

          <div className={'flex flex-col w-full justify-between gap-4 p-4'}>
            <div className={'flex flex-col justify-between items-start gap-2 sm:flex-row'}>
              <div className={'min-w-fit'}>
                <h2 className={'text-xl md:text-2xl font-bold'}>
                  {recipe.title} </h2>

                <h3 className={'text-stone-500 text-sm'}>Created by {' '}
                  <span className={'font-bold'}>{users[recipe.userUid]?.displayName || 'Anonymous'}</span></h3>

                <p className={'text-stone-500 text-sm'}>{formatDate(recipe.createdAt)}</p>

                <div className={'mt-4 text-stone-500 text-sm'}>
                  {recipe.isPublic ? (
                    <span className={'border border-red-600 py-1 px-3 text-red-600 text-xs rounded-full'}>Public</span>
                  ) : (
                    <span className={'border border-red-600 py-1 px-3 text-red-600 text-xs rounded-full'}>Private</span>
                  )}
                </div>
              </div>

              <div className={'hidden text-md items-center gap-2 text-stone-500 sm:flex'}>
                <div>
                  <p><i className={'uil uil-heart'}></i> {recipe.likes}</p>
                </div>

                <div>
                  <p><i className={'uil uil-comment-alt'}></i> {recipe.comments}</p>
                </div>
              </div>
            </div>

            <p className={'text-stone-700 max-h-32 line-clamp-4 overflow-hidden h-full'}>{recipe.description}</p>

            <div className={'flex items-center gap-4 text-md text-stone-500 sm:hidden'}>
              <div>
                <p><i className={'uil uil-heart'}></i> {recipe.likes}</p>
              </div>

              <div>
                <p><i className={'uil uil-comment-alt'}></i> {recipe.comments}</p>
              </div>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default RecipeCard;
