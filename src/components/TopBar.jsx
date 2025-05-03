import React, { useState } from 'react';
import reactLogo from '../assets/react.svg'; 

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="flex items-center">
          <img src={reactLogo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-blue-900 text-xl font-bold hover:text-blue-600">
            Ali Husnain
          </span>
        </div>

        
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-blue-900 hover:text-blue-600 transition">
            Home
          </a>
          <a href="#about" className="text-blue-900 hover:text-blue-600 transition">
            About
          </a>
          <a href="#projects" className="text-blue-900 hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#contact" className="text-blue-900 hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-900 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

     
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <a href="#home" className="block py-2 text-blue-900 hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="block py-2 text-blue-900 hover:text-blue-600">
            About
          </a>
          <a href="#projects" className="block py-2 text-blue-900 hover:text-blue-600">
            Projects
          </a>
          <a href="#contact" className="block py-2 text-blue-900 hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default TopBar;

