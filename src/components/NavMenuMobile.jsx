import { Link, useLocation } from 'react-router-dom';
import useLogout from '../hooks/auth/useLogout.js';

function NavMenuMobile(props) {
  const logout = useLogout();
  const location = useLocation();

  function isActive(route) {
    return location.pathname === route;
  }

  return (
    <>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${props.isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} md:hidden `}>
        <hr className={'border border-gray-200'} />

        {props.user ? (
          <>
            <ul className={'space-y-3 px-2 py-4 text-xl'}>
              <li>
                <Link to={'/'} className={`transition-all ${isActive('/') ? 'text-red-600' : 'hover:text-red-600'}`}>
                  <i className={'uil uil-estate'}></i> Feed
                </Link>
              </li>
              <li>
                <Link to={'/recipes'}
                      className={`transition-all ${isActive('/recipes') ? 'text-red-600' : 'hover:text-red-600'}`}>
                  <i className={'uil uil-newspaper'}></i> My Recipes
                </Link>
              </li>
            </ul>
          </>
        ) : null}

        <hr className={'border border-gray-200'} />

        <div className={'flex items-center gap-2 text-center py-4'}>
          {props.user ? (
            <>
              <p className={'w-full text-xl'}>
                Hi, {props.user.displayName.split(' ')[0]}! </p>

              <button onClick={logout}
                      className={'w-full transition-all cursor-pointer rounded-md px-3.5 py-1 text-lg text-red-600 border-2 border-red-600 shadow-xs hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
                <i className={'uil uil-signout'}></i> Log out
              </button>
            </>
          ) : (
            <>
              <Link to={'/login'}
                    className={'w-full transition-all cursor-pointer rounded-md px-3.5 py-1 text-lg text-red-600 border-2 border-red-600 shadow-xs hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
                Sign in
              </Link>

              <Link to={'/register'}
                    className={'w-full transition-all cursor-pointer rounded-md bg-red-600 px-3.5 py-1 text-lg text-stone-100 border-2 border-red-600 shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  )
    ;
}

export default NavMenuMobile;