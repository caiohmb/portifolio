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
        relative px-3 py-2 text-sm font-medium block
        transition-all duration-300

        before:absolute before:bottom-0 before:left-0 before:right-0
        before:h-[2px] before:bg-accent before:rounded-full
        before:transition-all before:duration-300
        ${isActive ? 'before:opacity-100' : 'before:opacity-0 hover:before:opacity-100'}

        ${isActive
          ? 'text-accent translate-y-[-2px]'
          : 'text-secondary hover:text-accent hover:translate-y-[-2px]'
        }
      `}
    >
      {label}
    </a>
  );
};
