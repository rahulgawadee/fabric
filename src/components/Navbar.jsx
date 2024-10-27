import React from 'react';
import { Link } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import AboutUs from './Aboutus';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#000000] h-20 md:h-24 lg:h-28 playfair-font"> {/* Adjusted height */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Link to="/"> <li>Homepage</li></Link>
              <Link to="#team"><li>Team</li></Link>
              <Link to="#how-to-use"><li>How to use?</li></Link>
              <Link to="/contactus"><li>Contact Us</li></Link>
              <Link to="/AboutUs"><li>About</li></Link>
            </ul>
          </div>
        </div>

        {/* Center Logo */}
        <div className="navbar-center">
          <Link to="/">
            <img
              src="src/assets/RVSVlogo.svg"
              alt="Logo"
              className="h-16 w-auto md:h-20 lg:h-24"
            />
          </Link>
        </div>
        

        {/* User Logo on Navbar End */}
        <div className="navbar-end">
          <div className="flex items-center">
            <Link to="/Login"  >
              <img
                src="src/assets/userlogo.svg"
                alt="User Logo"
                className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Add golden line below */}
      <div className="h-0.5 bg-white"></div>
    </div>
  );
};

export default Navbar;
