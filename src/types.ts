import { LucideIcon } from 'lucide-react';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type ButtonStyle = 'primary' | 'secondary' | 'action';
export type ButtonState = 'enabled' | 'disabled';
export type IconPosition = 'left' | 'right' | 'alone';
export type Links = { label: string; path: string; icon?: LucideIcon }[];
