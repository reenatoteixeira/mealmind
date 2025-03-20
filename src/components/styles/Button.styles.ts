import { ButtonSize, ButtonState, ButtonStyle, IconPosition } from '../../types.ts';
import clsx from 'clsx';

function getButtonStyle(size: ButtonSize, style: ButtonStyle, state: ButtonState, iconPosition: IconPosition) {
  const isIconAlone = iconPosition === 'alone';

  const baseClasses =
    'inline-flex items-center rounded-xl border-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500';

  const sizeClasses = {
    sm: isIconAlone ? 'text-sm p-1' : 'text-sm px-3 py-2 gap-1',
    md: isIconAlone ? 'text-md p-1' : 'text-md px-4 py-2 gap-1',
    lg: isIconAlone ? 'text-lg p-1' : 'text-lg px-4 py-2 gap-2',
    xl: isIconAlone ? 'text-xl p-1' : 'text-xl px-5 py-3 gap-2',
    xxl: isIconAlone ? 'text-2xl p-1' : 'text-2xl px-5 py-4 gap-2',
  };

  const iconSizeMap = {
    sm: 14,
    md: 18,
    lg: 20,
    xl: 24,
    xxl: 28,
  };

  const styleClasses = {
    primary: 'text-stone-200 bg-red-600 border-red-600 shadow-xs',
    secondary: 'text-red-600 bg-transparent border-red-600 shadow-xs',
    action: 'text-inherit bg-transparent border-none',
  };

  const hoverClasses = {
    primary: 'hover:bg-red-500 hover:border-red-500',
    secondary: 'hover:bg-red-100',
    action: 'hover:text-red-600',
  };

  const stateClasses = {
    enabled: clsx('opacity-100 cursor-pointer', hoverClasses[style]),
    disabled: 'opacity-50 cursor-not-allowed',
  };

  const buttonStyle = clsx(baseClasses, sizeClasses[size], styleClasses[style], stateClasses[state]),
    iconSize = iconSizeMap[size];

  return { buttonStyle, iconSize };
}

export default getButtonStyle;
