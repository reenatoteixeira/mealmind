import { NavMenuProps } from './NavMenu.types.ts';
import NavLinks from '../NavLinks/NavLinks.tsx';
import Button from '../Button/Button.tsx';
import { ChevronDown, ChevronUp, LogOut } from 'lucide-react';

function NavMenuMobile({ links, user, userMenuOpen, mobileMenuOpen, toggleUserMenu, toggleMockedUser }: NavMenuProps) {
  return (
    <nav
      className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} sm:hidden`}
    >
      <hr className="border border-stone-200" />

      <ul className="text-lg space-y-3 py-4">
        <NavLinks links={links} showIcons={true} iconPosition="left" />
      </ul>

      <hr className="border border-stone-200" />

      <div className={`flex items-center gap-2 py-4 ${user ? 'justify-center' : 'justify-end'}`}>
        {user ? (
          <Button
            onClick={toggleUserMenu}
            label={user.name}
            ariaLabel="Toggle user menu"
            style="action"
            size="lg"
            icon={userMenuOpen ? ChevronUp : ChevronDown}
            iconPosition="right"
          />
        ) : (
          <>
            <Button
              onClick={toggleMockedUser}
              label="Sign In"
              ariaLabel="Go to login page"
              style="secondary"
              size="lg"
            />
            <Button
              onClick={toggleMockedUser}
              label="Sign Up"
              ariaLabel="Go to register page"
              style="primary"
              size="lg"
            />

            {/*<ButtonLink href="/login" label="Sign In" ariaLabel="Go to login page" style="secondary" size="lg" />*/}
            {/*<ButtonLink href="/register" label="Sign Up" ariaLabel="Go to register page" style="primary" size="lg" />*/}
          </>
        )}
      </div>

      <div
        className={`space-y-3 transition-all duration-300 ${userMenuOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <Button onClick={toggleMockedUser} label="Log out" style="action" size="lg" icon={LogOut} />
      </div>
    </nav>
  );
}

export default NavMenuMobile;
