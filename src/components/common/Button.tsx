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
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[var(--accent-primary)] text-white hover:opacity-90 hover:shadow-lg hover:shadow-[var(--accent-primary)]/30 focus:ring-[var(--accent-primary)]',
    secondary: 'bg-[var(--accent-secondary)] text-white hover:opacity-90 hover:shadow-lg hover:shadow-[var(--accent-secondary)]/30 focus:ring-[var(--accent-secondary)]',
    outline: 'border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white focus:ring-[var(--accent-primary)]',
    ghost: 'text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] focus:ring-[var(--accent-primary)]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};
