import { useEffect, useState } from 'react';
import { Menu, X, House, Newspaper } from 'lucide-react';
import Button from '../Button/Button.tsx';
import NavMenu from '../NavMenu/NavMenu.tsx';
import NavMenuMobile from '../NavMenu/NavMenuMobile.tsx';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScreenScrolled, setIsScreenScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [mockedUser, setMockedUser] = useState<{ name: string } | false>(false);

  const headerLinks = [
    { label: 'Feed', path: '/', icon: House },
    { label: 'My Recipes', path: '/recipes', icon: Newspaper },
  ];

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleScreenScroll() {
    setIsScreenScrolled(window.scrollY > 50);
  }

  function toggleUserMenu() {
    setIsUserMenuOpen(!isUserMenuOpen);
  }

  function toggleMockedUser() {
    setMockedUser(mockedUser ? false : { name: 'Renato Teixeira' });
    setIsUserMenuOpen(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScreenScroll);
    return () => window.removeEventListener('scroll', handleScreenScroll);
  });

  return (
    <header
      className={`fixed bg-stone-100 top-0 w-full z-50 transition-all duration-300 ${isScreenScrolled || isMobileMenuOpen ? 'shadow-lg' : 'shadow-none'} ${isMobileMenuOpen ? 'rounded-b-xl' : null}`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:gap-10">
          <a href="/" className="logo-font text-red-600 text-4xl font-bold">
            MealMind
          </a>

          <div className="flex items-center sm:hidden">
            <Button
              onClick={toggleMobileMenu}
              ariaLabel="Toggle mobile menu"
              style="action"
              size="xxl"
              icon={isMobileMenuOpen ? X : Menu}
              iconPosition="alone"
            />
          </div>

          <NavMenu
            links={headerLinks}
            user={mockedUser}
            userMenuOpen={isUserMenuOpen}
            toggleUserMenu={toggleUserMenu}
            toggleMockedUser={toggleMockedUser}
          />
        </div>

        <NavMenuMobile
          links={headerLinks}
          user={mockedUser}
          userMenuOpen={isUserMenuOpen}
          mobileMenuOpen={isMobileMenuOpen}
          toggleUserMenu={toggleUserMenu}
          toggleMockedUser={toggleMockedUser}
        />
      </div>
    </header>
  );
}

export default Header;
