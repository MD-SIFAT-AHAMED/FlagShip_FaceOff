import React from "react";
import { Link, NavLink } from "react-router";
import { IoBookmark } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="navbar p-0 max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="cursor-pointer mr-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li><NavLink className={({isActive}) => isActive ? 'text-blue-600' : ''} to={'/'}>Home</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "text-blue-600" : ''} to={'/about'}>About</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "text-blue-600" : ''} to={'/blog'}>Blog</NavLink></li>
            </ul>
            </div>
            <Link to={'/'} className="text-xl">FlagShip FaceOff</Link>
            </div>
        <div className="navbar-end ">
            <ul className="menu menu-horizontal hidden lg:flex text-base  px-1">
                <li><NavLink className={({isActive}) => isActive ? 'text-blue-600' : ''} to={'/'}>Home</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "text-blue-600" : ''} to={'/about'}>About</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "text-blue-600" : ''} to={'/blog'}>Blog</NavLink></li>
          </ul>
          <div className="flex space-x-3">
            <FaCartShopping size={24}/>
            <IoBookmark size={24}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
