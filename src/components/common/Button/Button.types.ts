import { ButtonState, ButtonStyle, ButtonSize, IconPosition } from '../../../types.ts';
import { LucideIcon } from 'lucide-react';

export interface ButtonProps {
  label?: string;
  ariaLabel?: string;
  size?: ButtonSize;
  style?: ButtonStyle;
  icon?: LucideIcon;
  iconPosition?: IconPosition;
  state?: ButtonState;
  onClick?: () => void;
}
