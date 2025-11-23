import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div className="fixed top-20 right-4 w-64 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl z-[100] overflow-hidden">
      <ul className="flex flex-col py-2">
        {links.map((link, index) => (
          <li key={index} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
            <NavLink
              href={link.path}
              title={link.title}
              onClick={onClose}
              className="block px-6 py-4 text-gray-900 dark:text-white hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 text-lg font-medium"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
