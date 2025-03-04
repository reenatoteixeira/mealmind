import { Link } from 'react-router-dom';

function NavMenuMobile(props) {
  return (
    <>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${props.isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} md:hidden `}>
        <hr className={'border border-gray-200'} />

        <ul className={'space-y-3 px-2 py-4 text-xl'}>
          <li>
            <Link to={'/'} className={'transition-all hover:text-red-600'}>
              <i className={'uil uil-estate'}></i> Feed
            </Link>
          </li>
          <li>
            <Link to={'/recipes'} className={'transition-all hover:text-red-600'}>
              <i className={'uil uil-newspaper'}></i> My Recipes
            </Link>
          </li>
        </ul>

        <hr className={'border border-gray-200'} />

        <div className={'flex items-center gap-2 text-center py-4'}>
          <Link to={'/login'}
                className={'w-full text-xl px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg transition-all hover:bg-red-100'}>
            Sign in
          </Link>

          <Link to={'/register'}
                className={'w-full text-xl px-4 py-2 border-2 border-red-600 bg-red-600 text-stone-100 rounded-lg transition-all hover:bg-red-500'}>
            Sign up
          </Link>
        </div>
      </div>
    </>
  )
    ;
}

export default NavMenuMobile;