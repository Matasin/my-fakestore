import React from 'react';
import { Link } from 'react-router-dom'

import LogoImage from '../assets/logo.jpg'

const Logo = () => (
    <Link to='/' className='Logo'>
        <li>
            <img src={LogoImage} alt='Logo'/>
            <span>Lorem Ipsum</span>
        </li>
    </Link>
)
export default Logo