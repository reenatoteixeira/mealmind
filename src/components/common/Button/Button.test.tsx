import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';
import { ButtonProps } from './Button.types';
import { LucideIcon, Home } from 'lucide-react';

const mockOnClick = jest.fn();

const defaultProps: ButtonProps = {
  label: 'Click Me',
  size: 'md',
  style: 'primary',
  icon: undefined,
  iconPosition: 'left',
  state: 'enabled',
  onClick: mockOnClick,
};

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button {...defaultProps} />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('text-md px-4 py-2 text-stone-200 bg-red-600 border-red-600');
  });

  it('calls onClick handler when clicked', () => {
    render(<Button {...defaultProps} />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders with an icon', () => {
    render(<Button {...defaultProps} icon={Home as LucideIcon} />);
    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('renders with disabled state', () => {
    render(<Button {...defaultProps} state="disabled" />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toHaveClass('opacity-50 cursor-not-allowed');
    expect(buttonElement).toBeDisabled();
  });
});