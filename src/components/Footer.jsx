import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl dark:bg-gray-900/50 m-4 sticky'>
      <div className='w-full max-w-screen-xl mx-auto p-6 md:py-8'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0'>
          {/* Logo */}
          <Link
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img src='/images/logo.png' className='h-10' alt='Journezy Logo' />
          </Link>

          {/* Navigation Links */}
          <div className='flex flex-wrap items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300'>
            <Link
              to='/'
              className='hover:text-[#067d79] transition-colors duration-300'
            >
              Home
            </Link>
            <Link
              to='/planTrip'
              className='hover:text-[#067d79] transition-colors duration-300'
            >
              Plan Trip
            </Link>
            <Link
              to='/about'
              className='hover:text-[#067d79] transition-colors duration-300'
            >
              About
            </Link>
            <Link
              to='/contact'
              className='hover:text-[#067d79] transition-colors duration-300'
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className='my-6 border-gray-300 dark:border-gray-700' />

        {/* Copyright */}
        <span className='block text-sm md:text-base text-gray-600 sm:text-center dark:text-gray-400'>
          &copy; {new Date().getFullYear()}{' '}
          <Link
            to='/'
            className='font-semibold hover:text-[#067d79] transition-colors duration-300'
          >
            Journezy™{' '}
          </Link>
          All rights reserved.
        </span>
      </div>
      <div className='flex items-center justify-center gap-1 py-4 bg-gray-900 text-gray-400 text-sm rounded-b-2xl'>
        Developed with{' '}
        <Heart className='w-4 h-4 text-red-500 fill-red-500 animate-pulse' />
        by
        <span className='text-white font-semibold'>Satyam Sharma</span>
      </div>
    </footer>
  );
};

export default Footer;
