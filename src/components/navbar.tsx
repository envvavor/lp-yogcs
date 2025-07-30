import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    closeMenu();
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 text-base transition-colors ${
      isActive
        ? "text-orange-500 font-semibold underline underline-offset-4"
        : "text-gray-800 hover:text-orange-400"
    }`;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <button 
            onClick={() => scrollToSection("hero-section")}
            className="focus:outline-none"
          >
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="h-8 w-auto sm:h-8 md:h-10 lg:h-12 transition-transform hover:scale-105"
            />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center text-base lg:text-lg">
          <button 
            onClick={() => scrollToSection("hero-section")}
            className={navLinkClass({ isActive: false })}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("benefits-section")}
            className={navLinkClass({ isActive: false })}
          >
            Benefits
          </button>
          <button 
            onClick={() => scrollToSection("audience-section")}
            className={navLinkClass({ isActive: false })}
          >
            For Who
          </button>
          <button 
            onClick={() => scrollToSection("pricing-section")}
            className={navLinkClass({ isActive: false })}
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("gallery-section")}
            className={navLinkClass({ isActive: false })}
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection("cta-section")}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-gray-800 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col px-4 py-2 space-y-1">
            <button 
              onClick={() => scrollToSection("hero-section")}
              className={navLinkClass({ isActive: false })}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("benefits-section")}
              className={navLinkClass({ isActive: false })}
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection("audience-section")}
              className={navLinkClass({ isActive: false })}
            >
              For Who
            </button>
            <button 
              onClick={() => scrollToSection("pricing-section")}
              className={navLinkClass({ isActive: false })}
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("gallery-section")}
              className={navLinkClass({ isActive: false })}
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection("cta-section")}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-center my-2"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};