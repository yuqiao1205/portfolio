"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import DarkModeSwitch from "./DarkModeSwitch";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "TechFlow",
    path: "https://techblog-pi-opal.vercel.app/",
  },
  {
    title: "ArtWorks",
    path: "https://image-gallery-chi-murex.vercel.app/",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Check dark mode
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkDarkMode();

    // Watch for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Calculate navbar opacity based on scroll position
  const navbarOpacity = Math.min(scrollY / 300, 1); // Fade in over 300px scroll

  // Different background colors for light and dark mode
  const lightBgColor = `rgba(255, 255, 255, ${0.1 + navbarOpacity * 0.8})`;
  const darkBgColor = `rgba(17, 24, 39, ${0.1 + navbarOpacity * 0.9})`;

  return (
    <nav
      className="fixed mx-auto top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-sm transition-all duration-300"
      style={{
        backgroundColor: isDark ? darkBgColor : lightBgColor,
        borderColor: `rgba(${navbarOpacity > 0.5 ? '75, 85, 99' : (isDark ? '156, 163, 175' : '255, 255, 255')}, ${0.1 + navbarOpacity * 0.2})`,
        boxShadow: navbarOpacity > 0 ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' : 'none'
      }}
    >
      <div className="flex container lg:py-4 flex-wrap items-center mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="md:text-2xl font-semibold transition-transform duration-200"
        >

          <img
            src="images/pylogo7.png"
            alt="pylogo"
            width={50}
            height={50}
            className="rounded-full"
          />

        </Link>

        <p className="flex-1 text-center md:text-2xl font-semibold text-gray-900 dark:text-white fontSize: 30px">Yan Peng</p>

        <div className="flex items-center space-x-2">
     
          <div className="mobile-menu block md:hidden relative ml-4">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="relative w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 dark:from-cyan-500/30 dark:to-pink-500/30 backdrop-blur-sm rounded-xl border-2 border-cyan-400/40 hover:border-cyan-400/60 dark:border-cyan-400/30 dark:hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group shadow-lg dark:shadow-none"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-5 flex flex-col justify-between transform transition-all duration-300 group-hover:scale-110">
                  <span
                    className={`block h-0.5 w-6 bg-gray-700 dark:bg-white rounded-sm transform transition-all duration-300 ${
                      navbarOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-1'
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 bg-gray-700 dark:bg-white rounded-sm transform transition-all duration-300 ${
                      navbarOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{ width: navbarOpen ? '0' : '1.5rem' }}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 bg-gray-700 dark:bg-white rounded-sm transform transition-all duration-300 ${
                      navbarOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-1'
                    }`}
                  ></span>
                </div>
              </div>
            </button>

          </div>
          <div className="menu hidden md:block md:w-auto ml-4" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ml-4">
          <DarkModeSwitch />
        </div>

      </div>
       {navbarOpen ? <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} /> : null}
    </nav>
  );
};

export default Navbar;
