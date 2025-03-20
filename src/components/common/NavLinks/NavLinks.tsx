import { NavLinksProps } from './NavLinks.types.ts';
import { Link } from 'react-router-dom';

function NavLinks({ links, showIcons = true, iconPosition }: NavLinksProps) {
  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.path} className="flex gap-2 transition-all hover:text-red-600">
            {showIcons && iconPosition === 'left' && link.icon && <link.icon data-testid="icon" />}
            {iconPosition != 'alone' && link.label}
            {showIcons && iconPosition === 'right' && link.icon && <link.icon data-testid="icon" />}
            {showIcons && iconPosition === 'alone' && link.icon && <link.icon data-testid="icon" />}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
