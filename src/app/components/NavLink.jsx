import Link from "next/link";

const NavLink = ({ href, title, onClick, className }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={className || "block py-2 pl-3 pr-4 text-gray-900 dark:text-white sm:text-xl rounded md:p-0 hover:text-cyan-400 transition-colors duration-200"}
    >
      {title}
    </Link>
  );
};

export default NavLink;
