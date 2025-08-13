import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // Menu items (one source of truth for both desktop & mobile)
  const menuItems = [
    { label: "Add Task", to: "/addtask", type: "link" },
    { label: "Show", to: "/showtasks", type: "link" },
    { label: "Logout", action: () => dispatch(logout()), type: "button" },
  ];

  // Function to render menu items
  const renderMenu = (isMobile = false) =>
    menuItems.map((item, index) =>
      item.type === "link" ? (
        <Link
          key={index}
          to={item.to}
          className="hover:text-violet-400 text-white font-medium"
          onClick={() => isMobile && setIsOpen(false)}
        >
          {item.label}
        </Link>
      ) : (
        <button
          key={index}
          onClick={() => {
            item.action();
            if (isMobile) setIsOpen(false);
          }}
          className="hover:text-violet-400 text-white font-medium"
        >
          {item.label}
        </button>
      )
    );

  return (
    <nav className="w-full bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-[55px]">
        {/* Logo */}
        <div className="text-2xl font-bold text-violet-400">
          <Link to="/home">Chronotrex</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {renderMenu()}
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 flex flex-col items-center space-y-4 py-4">
          {renderMenu(true)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
