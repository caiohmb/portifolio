import type { CardProps } from '@/types';

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300';

  const variants = {
    default: 'bg-secondary/50 backdrop-blur-sm',
    elevated: 'bg-secondary/50 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10',
    outlined: 'bg-transparent border-2 border-cyan-500/30 hover:border-cyan-500',
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
};
