import React from 'react';
import './Navbar.scss';

import NavbarLogo from '../../components/Navbar-Logo'
import NavbarItem from '../../components/Navbar-Item'
import NavbarPhones from '../../components/Navbar-Phones/Navbar-Phones'

const Navbar = () => (
  <div className='Navbar-Container'>
      <NavbarPhones/>
      <div className='Navbar'>
        <NavbarLogo />
        <NavbarItem />
      </div>
  </div>
)
export default Navbar;