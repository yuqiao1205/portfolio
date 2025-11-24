import Link from "next/link";

const NavLink = ({ href, title, onClick, className }) => {
  const isExternal = href.startsWith('http');

  return (
    <Link
      href={href}
      onClick={onClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={className || "block py-2 pl-3 pr-4 text-gray-900 dark:text-white sm:text-xl rounded md:p-0 hover:text-cyan-400 transition-colors duration-200"}
    >
      {title}
    </Link>
  );
};

export default NavLink;
