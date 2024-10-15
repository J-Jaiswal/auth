import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center w-full bg-[#243642] text-white p-4">
      <ul className="flex gap-[20px] ">
        <li>
          <Link to="/login" className="hover:underline">
            LOGIN
          </Link>
        </li>
        <li>
          <Link to="/signup" className="hover:underline">
            SIGNUP
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:underline">
            DASHBOARD
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
