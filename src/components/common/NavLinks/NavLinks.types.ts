import { LucideIcon } from 'lucide-react';
import { IconPosition } from '../../../types.ts';

export interface NavLinksProps {
  links: { label: string; path: string; icon?: LucideIcon }[];
  showIcons?: boolean;
  iconPosition?: IconPosition;
}
