import React, { useState } from 'react';
import './nav.scss'

import { NavLink, Link } from 'react-router-dom'
import { NAVBAR_ITEMS } from '../../constants/constants'
import LazyImage from '../../lazy-image';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toogleNav = () => setIsOpen(!isOpen);
    
    return (
        <nav className='nav'>
            <Link
                to='/'
                className='nav__logo'
            >
                Fake Shop
            </Link>
            <div className={`nav__c-items ${isOpen ? 'nav__c-items--active' : ''}`}>
                {NAVBAR_ITEMS.map(({ id, name, path }) => {
                    return (
                        name === 'log in' ?
                            <NavLink
                                key={id}
                                to={path}
                                className='nav__item'
                                activeClassName='nav__item--active'
                                exact={true}
                                onClick={toogleNav}
                            >
                                <div className='nav__user-avatar'>
                                    <LazyImage
                                        src={`/${process.env.PUBLIC_URL}./assets/user-icon.svg`}
                                        alt='user-icon'
                                        height='22px'
                                        width='22px'
                                    />
                                    {name}
                                </div>
                            </NavLink >
                            :
                            <NavLink
                                key={id}
                                to={path}
                                className='nav__item'
                                activeClassName='nav__item--active'
                                exact={true}
                                onClick={toogleNav}
                            >
                                {name}
                            </NavLink >

                    )
                })}
            </div>
            <div
                className={`nav__hamburger ${isOpen ? 'nav__hamburger--active' : ''}`}
                onClick={toogleNav}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
};

export default Nav;