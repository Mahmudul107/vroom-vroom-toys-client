import React from "react";
import logo from "../../assets/VroomVroom.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li className="hover:text-red-400 hover:underline duration-500 relative">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-red-400 hover:underline duration-500 relative">
        <Link to="/about">All Toys</Link>
      </li>
      <li className="hover:text-red-400 hover:underline duration-500 relative">
        <Link to="/services">My Toys</Link>
      </li>
      <li className="hover:text-red-400 hover:underline duration-500 relative">
        <Link to="/services">Add A Toy</Link>
      </li>
      <li className="hover:text-red-400 hover:underline duration-500 ease-in relative">
        <Link to="blogs">Blogs</Link>
      </li>
      {/* {user?.email ? (
        <>
          <Link to="/bookings">My Bookings</Link>
          <Link onClick={handleLogout}>Log Out</Link>
        </>
      ) : (
        <Link to="login">Login</Link>
      )} */}
    </>
  );

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="navbar bg-base-100 h-32 font-serif">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="grid dropdown-content gap-2 mt-3 p-5 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div className="flex items-center">
            <Link to="/" className="normal-case text-xl">
              <img className="w-36 h-36 mt-4" src={logo} alt="" />
            </Link>
            <h2 className="text-3xl text-red-500 font-bold font-mono -ml-6">
              VroomVroom
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-8 px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <Link to='login'>
            <button className="btn duration-500 bg-fuchsia-500 hover:bg-red-400 border-none text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
