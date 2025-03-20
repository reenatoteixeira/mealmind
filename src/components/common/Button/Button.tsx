import { ButtonProps } from './Button.types.ts';
import getButtonStyle from '../../styles/Button.styles.ts';

function Button({
  label,
  ariaLabel,
  size = 'md',
  style = 'primary',
  icon: Icon,
  iconPosition = 'left',
  state = 'enabled',
  onClick,
}: ButtonProps) {
  const { buttonStyle, iconSize } = getButtonStyle(size, style, state, iconPosition);

  return (
    <button onClick={onClick} className={buttonStyle} disabled={state === 'disabled'}>
      <span className="sr-only">{ariaLabel}</span>
      {Icon && iconPosition === 'left' && <Icon size={iconSize} data-testid="icon" />}
      {iconPosition != 'alone' && label}
      {Icon && iconPosition === 'right' && <Icon size={iconSize} data-testid="icon" />}
      {Icon && iconPosition === 'alone' && <Icon size={iconSize} data-testid="icon" />}
    </button>
  );
}

export default Button;
