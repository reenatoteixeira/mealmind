import { ButtonState, ButtonStyle, ButtonSize, IconPosition } from '../../../types.ts';
import { LucideIcon } from 'lucide-react';

export interface ButtonLinkProps {
  label?: string;
  ariaLabel?: string;
  href?: string;
  size?: ButtonSize;
  style?: ButtonStyle;
  icon?: LucideIcon;
  iconPosition?: IconPosition;
  state?: ButtonState;
}
