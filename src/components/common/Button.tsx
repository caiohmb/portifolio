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
    // Glassmorphism - Modern translucent glass effect with gradient
    primary: 'bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-[1.02] focus:ring-2 focus:ring-cyan-500/50',

    // Neumorphism soft - Soft embossed effect
    secondary: 'bg-secondary/70 text-primary shadow-[4px_4px_12px_rgba(0,0,0,0.15),-4px_-4px_12px_rgba(255,255,255,0.05)] hover:shadow-[2px_2px_8px_rgba(0,0,0,0.2),-2px_-2px_8px_rgba(255,255,255,0.08)] border border-secondary/20 focus:ring-2 focus:ring-cyan-500/30 dark:shadow-[4px_4px_12px_rgba(0,0,0,0.3),-4px_-4px_12px_rgba(255,255,255,0.02)]',

    // Glassmorphism outline - Frosted glass border effect
    outline: 'bg-secondary/40 backdrop-blur-md border-2 border-cyan-500/50 text-primary hover:bg-cyan-500/20 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30 focus:ring-2 focus:ring-cyan-500/30',

    // Minimal ghost - Clean hover effect
    ghost: 'text-primary bg-transparent hover:bg-secondary/50 focus:ring-2 focus:ring-cyan-500/20',
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
