import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu.jsx';
import NavMenuMobile from './NavMenuMobile.jsx';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  function handleScroll() {
    setScrolled(window.scrollY > 50);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header id={'header'}
              className={`fixed bg-stone-100 top-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'shadow-lg' : 'shadow-none'}`}>
        <div className={'container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
          <div className={'flex items-center justify-between h-16 md:gap-12'}>
            <Link to={'/'} className={'logo-font text-red-600 text-4xl font-bold'}>MealMind</Link>

            <div className={'flex items-center md:hidden'}>
              <button onClick={toggleMenu} type={'button'} className={'flex text-4xl'}>
                <span className={'sr-only'}>Open main menu</span>
                {isMenuOpen ? (
                  <i className={'uil uil-times cursor-pointer transition-all hover:text-red-600'}></i>
                ) : (
                  <i className={'uil uil-bars cursor-pointer transition-all hover:text-red-600'}></i>
                )}
              </button>
            </div>

            <NavMenu />
          </div>

          <NavMenuMobile isMenuOpen={isMenuOpen} />
        </div>
      </header>
    </>
  );
}

export default Header;