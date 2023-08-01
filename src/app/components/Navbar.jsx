"use client";

import { useState } from "react";
import MobileNav from "./MobileNav";
import { MdLightMode, MdDarkMode, MdClose } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";

export default function Navbar({ theme, handleThemeSwitch }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 z-20 w-full border-b border-neutral-300 bg-neutral-200 bg-opacity-30 backdrop-blur-sm backdrop-filter dark:border-neutral-600 dark:bg-neutral-700 dark:bg-opacity-30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a
            href="/"
            className="text-xl font-semibold text-neutral-950 dark:text-neutral-50"
          >
            CJarvis
          </a>
          <div className="hidden sm:block">
            <ul className="flex space-x-6 font-medium">
              <li>
                <a href="#home" className="nav-item">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="nav-item">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-item">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-item">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-item">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-3.5 sm:gap-0">
            <button
              onClick={handleThemeSwitch}
              className="rounded-full p-1.5 transition-colors duration-300 ease-in-out hover:bg-sky-500 dark:hover:bg-indigo-500"
            >
              {theme === "light" ? (
                <MdDarkMode className="text-2xl text-neutral-950" />
              ) : (
                <MdLightMode className="text-2xl text-neutral-50" />
              )}
            </button>
            <button
              className="block rounded-full p-[3px] transition-colors duration-300 ease-in-out hover:bg-sky-500 dark:hover:bg-indigo-500 sm:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <MdClose className="text-3xl text-neutral-950 dark:text-neutral-50" />
              ) : (
                <BiMenuAltRight className="text-3xl text-neutral-950 dark:text-neutral-50" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <MobileNav
          isOpen={isMobileMenuOpen}
          handleClose={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}
