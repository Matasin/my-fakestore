import React from 'react';
import './home.scss'

import { Link } from "react-router-dom";

const Home = () => (
    <>
        <div 
            className='home lazy' 
            data-bg={process.env.PUBLIC_URL + `./assets/home/header-img.png`}
        >
            <div className='home__c-header'>
                <header className='home__header'>fall &amp; winter</header>
                <Link
                    className='home__btn-primary btn-primary'
                    to='/products'
                >
                    shop now
                </Link>
            </div>
        </div>
        <div className='home__decoration'>
            free shipping worldwide
        </div>
    </>
)

export default Home;