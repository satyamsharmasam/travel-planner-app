import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
const Footer = () => {
  return (
    <footer>
      <div className='mx-auto max-w-5xl px-4 py-5 sm:px-6 lg:px-8 '>
        <div className='flex justify-center '>
          <img src={logo} alt='' className='w-[200px]' />
        </div>

        <ul className='mt-5 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
          <li>
            <Link
              className='text-gray-700 transition hover:text-gray-700/75'
              to={'/'}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className='text-gray-700 transition hover:text-gray-700/75'
              to={'/plantrip'}
            >
              Plan Trip
            </Link>
          </li>

          <li>
            <Link
              className='text-gray-700 transition hover:text-gray-700/75'
              to={'about'}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              className='text-gray-700 transition hover:text-gray-700/75'
              to={'contact'}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div f>
        <hr />
        <p className='text-center text-sm text-gray-500 mt-5 pb-5'>
          &copy; {new Date().getFullYear()} Journezy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
