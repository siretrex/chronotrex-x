import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useDispatch } from 'react-redux';
import { logout } from "../features/user/userSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <nav className="w-full bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-[55px]">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-violet-400">
          <Link to="/home">Chronotrex</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/addtask" className="hover:text-violet-400 text-white">
            Add Task
          </Link>
          <Link to="/showtasks" className="hover:text-violet-400 text-white">
            Show
          </Link>
          <button className="hover:text-violet-400 text-white"
          onClick={(e)=>dispatch(logout())}
          >
            Logout
          </button>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 flex flex-col items-center space-y-3 py-4">
          <Link to="/addtask" className="hover:text-violet-400 text-white" onClick={() => setIsOpen(false)}>
            Add Task
          </Link>
          <Link to="/login" className="hover:text-violet-400 text-white" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link to="/showtasks" className="hover:text-violet-400 text-white" onClick={() => setIsOpen(false)}>
            Show
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
