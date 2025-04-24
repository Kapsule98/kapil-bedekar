import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-400">
            Kapil Bedekar
          </Link>
        </h1>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-400">
                Projects
              </Link>
            </li>
            <li>
                <Link to="/experience" className="hover:text-blue-400">
                    Experience
                </Link>
            </li>
            {/* <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
