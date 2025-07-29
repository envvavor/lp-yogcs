import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const scrollToHero = () => {
  const heroSection = document.getElementById("hero-section");
  if (heroSection) {
    heroSection.scrollIntoView({ behavior: "smooth" });
  }
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 text-base transition-colors ${
      isActive
        ? "text-orange-500 font-semibold underline"
        : "text-gray-800 hover:text-orange-400"
    }`;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" onClick={scrollToHero}>
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-8 w-auto sm:h-8 md:h-10 lg:h-12"
            />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center text-base lg:text-lg">
          <NavLink to="/" className={navLinkClass} end onClick={scrollToHero}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col px-4 py-2 space-y-2 text-base">
            <NavLink to="/" className={navLinkClass} onClick={() => { scrollToHero(); closeMenu(); }}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};
