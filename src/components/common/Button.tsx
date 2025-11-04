import type { ButtonProps } from '@/types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseStyles = 'relative font-semibold rounded-xl transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 select-none';

  const variants = {
    // Primary - Solid deep blue
    primary: 'bg-accent text-white shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] hover:brightness-110 focus:ring-2 focus:ring-accent/50',

    // Secondary - Neutral with subtle effect
    secondary: 'bg-secondary/70 text-primary shadow-sm hover:shadow-md border border-default hover:border-hover focus:ring-2 focus:ring-accent/30',

    // Outline - Clean border style
    outline: 'bg-transparent backdrop-blur-sm border-2 border-accent text-accent shadow-md shadow-accent/15 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] focus:ring-2 focus:ring-accent/30',

    // Ghost - Minimal style
    ghost: 'text-primary bg-transparent hover:bg-secondary/50 focus:ring-2 focus:ring-accent/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
