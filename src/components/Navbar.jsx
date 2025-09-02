// import { useState } from 'react';
import logo from '../assets/logo.png';
// import { NavLink } from 'react-router-dom';
import NavbarDesign from './ui/Navbardesign';

const Navbar = () => {
  return (
    <div className='w-full flex justify-center sticky top-0 z-1000 '>
      <NavbarDesign
        logo={logo}
        logoAlt='Company Logo'
        items={[
          { label: 'Home', href: '/' },
          { label: 'Plan Trip', href: '/plantrip' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ]}
        className='custom-nav'
        ease='power2.easeOut'
        baseColor='black'
        pillColor='white'
        hoveredPillTextColor='white'
        pillTextColor='black'
      />
    </div>
  );
};

export default Navbar;
