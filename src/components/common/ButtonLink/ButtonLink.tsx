import { ButtonLinkProps } from './ButtonLink.types.ts';
import getButtonStyle from '../../styles/Button.styles.ts';
import { Link } from 'react-router-dom';

function ButtonLink({
  label,
  ariaLabel,
  href = '/',
  size = 'md',
  style = 'primary',
  icon: Icon,
  iconPosition = 'left',
  state = 'enabled',
}: ButtonLinkProps) {
  const { buttonStyle, iconSize } = getButtonStyle(size, style, state, iconPosition);

  return (
    <Link to={href} className={buttonStyle}>
      <span className="sr-only">{ariaLabel}</span>
      {Icon && iconPosition === 'left' && <Icon size={iconSize} data-testid="icon" />}
      {iconPosition != 'alone' && label}
      {Icon && iconPosition === 'right' && <Icon size={iconSize} data-testid="icon" />}
      {Icon && iconPosition === 'alone' && <Icon size={iconSize} data-testid="icon" />}
    </Link>
  );
}

export default ButtonLink;
