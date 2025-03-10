import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "About Us", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Solutions", href: "#products" },
  ];

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mx-auto">
      <div className="px-5 py-4">
        <div className="flex justify-between">
          {/* Logo container */}
          <div className="flex items-center">
            <a href="#">
              <div className="flex h-10 w-30 flex-shrink-0 items-center">
                {/* Company logo */}
                <img src={logo} alt="" />
              </div>
            </a>
          </div>

          {/* Desktop and tablet navigation items */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-2 py-1 text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
            {/* Contact button */}
            <a
              href="#contact"
              className="bg-eastern-blue hover:bg-eastern-blue-dark rounded-md px-5 py-2 text-base font-medium text-white transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button with inline SVG instead of Lucide icons */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="relative h-6 w-6 focus:outline-none"
            >
              {/* Hamburger icon - the three lines */}
              <span
                className={`absolute left-0 h-0.5 w-6 transform bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"}`}
              ></span>

              <span
                className={`absolute left-0 h-0.5 w-6 transform bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>

              <span
                className={`absolute left-0 h-0.5 w-6 transform bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"}`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`transform transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "h-[calc(100vh-68px)] translate-y-0 opacity-100"
            : "pointer-events-none h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="bg-eastern-blue-lightest flex flex-col gap-8 p-5">
          <div>
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium"
              >
                <button type="button" onClick={toggleMenu}>
                  {item.name}
                </button>
              </a>
            ))}
          </div>

          <div className="w-full">
            {/* Mobile contact button */}
            <a
              href="#contact"
              onClick={toggleMenu}
              className="bg-eastern-blue hover:bg-eastern-blue-dark block w-full rounded-md px-5 py-2 text-center text-base font-medium text-white transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
