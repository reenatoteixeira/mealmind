import { Links } from '../../../types.ts';

export interface NavMenuProps {
  links: Links;
  user: { name: string } | false;
  userMenuOpen: boolean;
  mobileMenuOpen?: boolean;
  toggleUserMenu: () => void;
  toggleMockedUser: () => void;
}
