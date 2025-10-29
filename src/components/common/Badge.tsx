/**
 * Badge Component
 *
 * Componente de badge reutilizável para exibir skills, tags e labels
 */
import React, { useEffect, useState } from 'react';

interface BadgeProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  size = 'md',
  icon,
  className = '',
}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verificar o tema atual
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    // Observar mudanças no tema
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Tamanhos
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  const badgeClasses = `
    inline-flex items-center gap-1.5
    ${sizes[size]}
    rounded-full border
    font-medium transition-all duration-300
    hover:scale-105 hover:shadow-md
    cursor-default
    backdrop-blur-sm
    ${className}
  `;

  const BadgeContent = (
    <>
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </>
  );

  const lightStyles = {
    backgroundColor: 'rgba(248, 250, 252, 0.7)',
    color: 'rgb(71, 85, 105)',
    borderColor: 'rgba(226, 232, 240, 0.8)',
  };

  const darkStyles = {
    backgroundColor: 'rgba(30, 41, 59, 0.4)',
    color: 'rgb(203, 213, 225)',
    borderColor: 'rgba(51, 65, 85, 0.6)',
  };

  return (
    <span
      className={badgeClasses}
      style={isDark ? darkStyles : lightStyles}
    >
      {BadgeContent}
    </span>
  );
};
