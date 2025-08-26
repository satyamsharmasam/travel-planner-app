import { useState } from 'react';
import logo from '../assets/logo2.png';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkIcon, setDarkIcon] = useState(false); // false = Sun, true = Moon

  const links = ['Home', 'Plan Trip', 'About', 'Contact Us'];

  return (
    <nav className='bg-slate-50 shadow-xs text-slate-900 h-16 top-0 sticky z-50 flex w-full'>
      <div className='max-w-7xl mx-auto flex items-center justify-between w-full h-full px-4'>
        {/* Logo */}
        <div className='w-32 flex-shrink-0'>
          <img src={logo} alt='logo' className='h-10 object-contain' />
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6 font-semibold text-sm'>
          {links.map((link, i) => (
            <a
              key={i}
              href='#'
              className='hover:text-blue-500 transition-colors'
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right side icons */}
        <div className='flex items-center space-x-4'>
          <button
            onClick={() => setDarkIcon(!darkIcon)}
            className='text-2xl cursor-pointer'
          >
            {darkIcon ? <HiMoon /> : <HiSun />}
          </button>

          {/* Mobile Menu Button */}
          <button className='md:hidden text-3xl' onClick={() => setOpen(true)}>
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-slate-50 text-slate-900 z-50 flex flex-col items-center justify-center space-y-8 transform transition-transform duration-500 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          className='absolute top-6 right-6 text-3xl'
          onClick={() => setOpen(false)}
        >
          <HiX />
        </button>

        {/* Links */}
        {links.map((link, i) => (
          <a
            key={i}
            href='#'
            onClick={() => setOpen(false)}
            className='text-xl font-semibold tracking-wide hover:text-blue-500 transition-colors'
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
