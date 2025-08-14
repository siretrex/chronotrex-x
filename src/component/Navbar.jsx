import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const menuItems = [
    { label: "Add Task", to: "/chronotrex-x/addtask", type: "link" },
    { label: "Show", to: "/chronotrex-x/showtasks", type: "link" },
    { label: "Logout", action: () => dispatch(logout()), type: "button" },
  ];

  return (
    <nav className="w-full bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex  md:flex-row justify-between items-center h-[55px] md:h-auto py-2">
        {/* Logo */}
        <div className="text-2xl font-bold text-violet-400 mb-2 md:mb-0 pl-2">
          <Link to="/chronotrex-x/home">Chronotrex</Link>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col md:flex-row md:space-x-8 items-center space-y-2 md:space-y-0">
          {menuItems.map((item, index) =>
            item.type === "link" ? (
              <Link
                key={index}
                to={item.to}
                className="hover:text-violet-400 text-white font-medium"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={index}
                onClick={item.action}
                className="hover:text-violet-400 text-white font-medium pr-2"
              >
                {item.label}
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
