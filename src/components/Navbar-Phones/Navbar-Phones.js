import React, { useState } from 'react'
import './Navbar-Phones.scss';

import NavbarLogo from '../Navbar-Logo'
import NavbarItem from '../Navbar-Item'

const styleWhenActive = {
    backgroundColor: 'white',
}
const NavbarPhones = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className='Navbar-Phones-Container'>
            <div className='Navbar-Phones'>
                <NavbarLogo />
                <button 
                    onClick= { () => setIsOpen(!isOpen) }
                    className='Navbar-Phones-Button'
                    
                >
                    <div className="bar1" style= { isOpen ? styleWhenActive : null }></div>
                    <div className="bar2" style= { isOpen ? styleWhenActive : null }></div>
                    <div className="bar3" style= { isOpen ? styleWhenActive : null }></div>
                </button>
            </div>

            {isOpen ? 
                <NavbarItem setIsOpen={setIsOpen} isOpen={isOpen}/>
                : 
                null
            }
        </div>
    )
}
export default NavbarPhones