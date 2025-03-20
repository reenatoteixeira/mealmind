import { NavMenuProps } from './NavMenu.types.ts';
import NavLinks from '../NavLinks/NavLinks.tsx';
import Button from '../Button/Button.tsx';
import { ChevronDown, ChevronUp, LogOut } from 'lucide-react';

function NavMenu({ links, user, userMenuOpen, toggleUserMenu, toggleMockedUser }: NavMenuProps) {
  return (
    <nav className="hidden sm:flex sm:items-center sm:justify-between sm:w-full">
      <ul className="text-lg max-w-fit flex items-center gap-6">
        <NavLinks links={links} showIcons={false} iconPosition="left" />
      </ul>

      <div className="flex items-center gap-2">
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
              size="md"
            />
            <Button
              onClick={toggleMockedUser}
              label="Sign Up"
              ariaLabel="Go to register page"
              style="primary"
              size="md"
            />

            {/*<ButtonLink href="/login" label="Sign In" ariaLabel="Go to login page" style="secondary" size="md" />*/}
            {/*<ButtonLink href="/register" label="Sign Up" ariaLabel="Go to register page" style="primary" size="md" />*/}
          </>
        )}

        <div
          className={`space-y-3 transition-all duration-300 ${userMenuOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'} sm:absolute sm:mt-20 sm:bg-stone-200 sm:border sm:border-stone-300 sm:shadow-md sm:shadow-stone-400 sm:pb-0 sm:rounded-lg`}
        >
          <Button
            onClick={toggleMockedUser}
            label="Log out"
            ariaLabel="Log out from your account"
            style="action"
            size="md"
            icon={LogOut}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
