import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout.js';

function NavMenu(props) {
  const logout = useLogout();

  return (
    <>
      <div className={'hidden md:flex md:items-center md:justify-between md:w-full'}>
        <ul className={'flex gap-6 text-lg'}>
          <li>
            <Link to={'/'} className={'transition-all hover:text-red-600'}>
              Feed
            </Link>
          </li>
          {props.user ? (
            <>
              <li>
                <Link to={'/recipes'} className={'transition-all hover:text-red-600'}>
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
                      className={'text-lg px-4 py-1 border-2 border-red-600 text-red-600 rounded-lg transition-all cursor-pointer hover:bg-red-100'}>
                <i className={'uil uil-signout'}></i> Log out
              </button>
            </>
          ) : (
            <>
              <Link to={'/login'}
                    className={'text-lg px-4 py-1 border-2 border-red-600 text-red-600 rounded-lg transition-all hover:bg-red-100'}>
                Sign in
              </Link>

              <Link to={'/register'}
                    className={'text-lg px-4 py-1 border-2 border-red-600 bg-red-600 text-stone-100 rounded-lg transition-all hover:bg-red-500'}>
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