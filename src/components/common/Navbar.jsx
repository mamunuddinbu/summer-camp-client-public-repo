import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import { AuthContext } from "../../pages/auth/AuthProvider";

const Navbar = (/*{ loggedIn, profilePicture} */) => {
  const { user, logOut , takeImg } = useContext(AuthContext);
  console.log(user);
  
console.log(takeImg);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold">
          <img className="h-[120px]" src={logo} alt="" /> <p className="text-3xl">LingoJoe</p> <p>Learn foreign language with us</p>
        </Link>
      </div>
      <ul className="flex items-center space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/payment" className="hover:text-gray-300">
            payment
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
        {user ? (
          <>
            <li>
              <Link to="/dashboard">
                <p className="text-b">Dashboard</p>
              </Link>
            </li>
            <li>
            <img
                  src={user?.photoURL}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
            </li>
            <li>{user?.email}</li>
            <li>
              <button onClick={handleLogout}>LogOut</button>
            </li>
          </>
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
