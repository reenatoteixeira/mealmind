import { ButtonProps } from './Button.types.ts';
import clsx from 'clsx';

function Button({
                  label,
                  size = 'md',
                  style = 'primary',
                  icon: Icon,
                  iconPosition = 'left',
                  state = 'enabled',
                  onClick,
                }: ButtonProps) {

  const baseClasses = 'inline-flex items-center gap-1 rounded-xl font-semibold shadow-xs border-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500',
    sizeClasses = {
      sm: 'text-sm px-3 py-2',
      md: 'text-md px-4 py-2',
      lg: 'text-lg px-5 py-4',
      xl: 'text-xl px-6 py-5',
    },
    iconSizeMap = {
      sm: 14,
      md: 18,
      lg: 20,
      xl: 24,
    },
    styleClasses = {
      primary: 'text-stone-200 bg-red-600 border-red-600',
      secondary: 'text-red-600 bg-transparent border-red-600',
    },
    hoverClasses = {
      primary: 'hover:bg-red-500 hover:border-red-500',
      secondary: 'hover:bg-red-100',
    },
    stateClasses = {
      enabled: clsx('opacity-100 cursor-pointer', hoverClasses[style]),
      disabled: 'opacity-50 cursor-not-allowed',
    },
    buttonClasses = clsx(baseClasses, sizeClasses[size], styleClasses[style], stateClasses[state]);

  return (
    <button onClick={onClick} className={buttonClasses} disabled={state === 'disabled'}>
      {Icon && iconPosition === 'left' && <Icon size={iconSizeMap[size]} data-testid="icon" />}
      {iconPosition != 'alone' && label}
      {Icon && iconPosition === 'right' && <Icon size={iconSizeMap[size]} data-testid="icon" />}
      {Icon && iconPosition === 'alone' && <Icon size={iconSizeMap[size]} data-testid="icon" />}
    </button>
  );
}

export default Button;
