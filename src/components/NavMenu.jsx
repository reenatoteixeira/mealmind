function NavMenu() {
  return (
    <>
      <div className={'hidden md:flex md:items-center md:justify-between md:w-full'}>
        <ul className={'flex gap-6 text-lg'}>
          <li>
            <a href={'/'} className={'transition-all hover:text-red-600'}>
              Feed
            </a>
          </li>
          <li>
            <a href={'/recipes'} className={'transition-all hover:text-red-600'}>
              My Recipes
            </a>
          </li>
        </ul>

        <div className={'flex gap-2'}>
          <a href={'/login'}
             className={'text-lg px-4 py-1 border-2 border-red-600 text-red-600 rounded-lg transition-all hover:bg-red-100'}>
            Sign in
          </a>

          <a href={'/register'}
             className={'text-lg px-4 py-1 border-2 border-red-600 bg-red-600 text-stone-100 rounded-lg transition-all hover:bg-red-500'}>
            Sign up
          </a>
        </div>
      </div>
    </>
  );
}

export default NavMenu;