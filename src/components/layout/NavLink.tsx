interface NavLinkProps {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  isActive = false,
  onClick
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`
        relative px-2 py-1.5 text-sm font-medium
        transition-all duration-300

        ${isActive ? 'text-gradient' : 'text-primary hover:text-gradient'}

        after:absolute after:bottom-0 after:left-0
        after:h-0.5
        after:bg-gradient-to-r after:from-cyan-500 after:to-violet-600
        after:transition-all after:duration-300

        ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
      `}
    >
      {label}
    </a>
  );
};
