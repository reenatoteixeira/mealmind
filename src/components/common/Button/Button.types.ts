import { LucideIcon } from 'lucide-react';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonStyle = 'primary' | 'secondary';
export type ButtonState = 'enabled' | 'disabled';
export type IconPosition = 'left' | 'right' | 'alone';

export interface ButtonProps {
  label?: string;
  size?: ButtonSize;
  style?: ButtonStyle;
  icon?: LucideIcon;
  iconPosition?: IconPosition;
  state?: ButtonState;
  onClick?: () => void;
}
