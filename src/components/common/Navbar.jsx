import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png'

const Navbar = (/*{ loggedIn, profilePicture} */) => {
    const loggedIn = false;
    const profilePicture = null;
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold">
          <img className='h-[120px]' src={logo} alt="" />
        </Link>
      </div>
      <ul className="flex items-center space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/instructors" className="hover:text-gray-300">
            Instructors
          </Link>
        </li>
        <li>
          <Link to="/classes" className="hover:text-gray-300">
            Classes
          </Link>
        </li>
        {loggedIn ? (
          <li>
            <Link to="/dashboard">
              <img
                src={profilePicture}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
