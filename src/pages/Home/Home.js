import React from 'react';
import './home.scss'

import { Link } from "react-router-dom";

const Home = () => (
    <>
        <div className='home'>
            <div className='home__c-header'>
                <header className='home__header'>FALL &amp; WINTER</header>
                <Link
                    className='home__btn-primary btn-primary'
                    to='/products'
                >
                    Shop Now
                </Link>
            </div>
        </div>
        <div className='home__decoration'>
            FREE SHIPPING WORLDWIDE
        </div>
    </>
)

export default Home;