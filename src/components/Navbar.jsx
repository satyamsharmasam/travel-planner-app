// import { useState } from 'react';
import logo from '../assets/logo.png';
// import { NavLink } from 'react-router-dom';
import NavbarDesign from './ui/Navbardesign';

const Navbar = () => {
  return (
    <div className='w-full flex justify-center'>
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
        baseColor='white'
        pillColor='black'
        hoveredPillTextColor='black'
        pillTextColor='white'
      />
    </div>
  );
};

export default Navbar;
