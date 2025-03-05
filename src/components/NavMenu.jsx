import { Link, useLocation } from 'react-router-dom';
import useLogout from '../hooks/useLogout.js';

function NavMenu(props) {
  const logout = useLogout();
  const location = useLocation();

  function isActive(route) {
    return location.pathname === route;
  }

  return (
    <>
      <div className={'hidden md:flex md:items-center md:justify-between md:w-full'}>
        {props.user ? (
          <>
            <ul className={'flex items-center gap-6 text-lg'}>
              <li>
                <Link to={'/'}
                      className={`transition-all ${isActive('/') ? 'text-red-600' : 'hover:text-red-600 hover:underline'}`}>
                  Feed
                </Link>
              </li>
              <li>
                <Link to={'/recipes'}
                      className={`transition-all ${isActive('/recipes') ? 'text-red-600' : 'hover:text-red-600 hover:underline'}`}>
                  My Recipes
                </Link>
              </li>
            </ul>
          </>
        ) : null}

        <div className={'flex items-center justify-end gap-4'}>
          {props.user ? (
            <>
              <p className={'text-lg'}>
                Hi, {props.user.displayName}! </p>

              <button onClick={logout}
                      className={'transition-all cursor-pointer rounded-md px-3.5 py-1 text-lg text-red-600 border-2 border-red-600 shadow-xs hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
                <i className={'uil uil-signout'}></i> Log out
              </button>
            </>
          ) : (
            <>
              <Link to={'/login'}
                    className={'transition-all cursor-pointer rounded-md px-3.5 py-1 text-lg text-red-600 border-2 border-red-600 shadow-xs hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
                Sign in
              </Link>

              <Link to={'/register'}
                    className={'transition-all cursor-pointer rounded-md bg-red-600 px-3.5 py-1 text-lg text-stone-100 border-2 border-red-600 shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default NavMenu;