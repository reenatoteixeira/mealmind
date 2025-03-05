import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout.js';

function NavMenu(props) {
  const logout = useLogout();

  return (
    <>
      <div className={'hidden md:flex md:items-center md:justify-between md:w-full'}>
        <ul className={'flex gap-6 text-lg'}>
          <li>
            <Link to={'/'} className={'transition-all hover:text-red-600 hover:underline'}>
              Feed
            </Link>
          </li>
          {props.user ? (
            <>
              <li>
                <Link to={'/recipes'} className={'transition-all hover:text-red-600 hover:underline'}>
                  My Recipes
                </Link>
              </li>
            </>
          ) : null}
        </ul>

        <div className={'flex items-center gap-4'}>
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