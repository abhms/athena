'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenClip } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="max-w-screen-xl flex items-center justify-between mx-auto navbar-container rounded-lg m-2 Navbar bg-white p-4 flex justify-between items-center">
      {/* Left side */}
      <div className="flex items-center space-x-3">
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-3xl font-semibold whitespace-nowrap">ATHENA</span>
        </Link>

        <form className="flex items-center max-w-lg" style={{backgroundColor:"#0000000d"}}>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {/* Icon */}
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                />
              </svg>
            </div>
            {/* Input */}
            <input
              type="text"
              id="voice-search"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10"
              placeholder="Search Blog"
            />
          </div>
        </form>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleNavbar}
          className="block md:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? true : false}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        
        {/* Links */}
        <div
          className={`md:flex md:items-center md:space-x-8 md:space-y-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <Link href="/blog" className="block py-2 px-3 rounded navbarText">
                <FontAwesomeIcon icon={faPenClip} />
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="block py-2 px-3 rounded navbarText"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
