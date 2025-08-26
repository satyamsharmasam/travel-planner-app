import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-gradient-to-r bg-white shadow-lg fixed w-full top-0 left-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          {/* Logo */}
          <div className='flex items-center'>
            <img src={logo} alt='' className='w-40' />
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-8 items-center text-black'>
            <a href='#' className=' hover:text-yellow-300 transition'>
              Home
            </a>
            <a href='#' className=' hover:text-yellow-300 transition'>
              About
            </a>
            <a href='#' className=' hover:text-yellow-300 transition'>
              Services
            </a>
            <a href='#' className=' hover:text-yellow-300 transition'>
              Contact
            </a>
            <button className='bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium transition'>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-white focus:outline-none'
            >
              {isOpen ? (
                // Close icon
                <svg
                  className='w-7 h-7'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className='w-7 h-7'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden transform transition-all duration-500 ease-in-out origin-top ${
          isOpen
            ? 'max-h-80 opacity-100 scale-y-100'
            : 'max-h-0 opacity-0 scale-y-0'
        }`}
      >
        <div className='px-6 pt-4 pb-6 space-y-4'>
          <a
            href='#'
            className='block text-white hover:text-yellow-300 transition'
          >
            Home
          </a>
          <a
            href='#'
            className='block text-white hover:text-yellow-300 transition'
          >
            About
          </a>
          <a
            href='#'
            className='block text-white hover:text-yellow-300 transition'
          >
            Services
          </a>
          <a
            href='#'
            className='block text-white hover:text-yellow-300 transition'
          >
            Contact
          </a>
          <button className='w-full bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium transition'>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
