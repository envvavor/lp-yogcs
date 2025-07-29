import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-orange-400 w-20 flex items-center sm:w-40">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-black hover:text-accent transition-colors${isActive ? " font-bold underline" : ""}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-black hover:text-accent transition-colors${isActive ? " font-bold underline" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-black hover:text-accent transition-colors${isActive ? " font-bold underline" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
    );
};