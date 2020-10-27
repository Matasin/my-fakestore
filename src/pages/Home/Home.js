import React from 'react';
import './home.scss'

import { Link } from "react-router-dom";
import ITEMS from '../../context/products.json'
import CardProduct from '../../components/card-product/card-product'

const Home = () => (
    <>
        <div
            className='home lazy'
            data-bg={`/${process.env.PUBLIC_URL}./assets/home/header-img.png`}
        >
            <div className='home__c-header'>
                <header className='home__header'>fall &amp; winter</header>
                <Link
                    className='home__btn-primary btn-primary'
                    to='/shop'
                >
                    shop now
                </Link>
            </div>
        </div>
        <div className='home__decoration'> free shipping worldwide </div>
        <div className='home__label-collection'>
            <h3>year round</h3>
            <div></div>
            <p>must have items</p>
        </div>
        <div className='home__c-cards'>
            <CardProduct
                id={ITEMS[5].id}
                btnText={"I'am item"}
                className='home__card'
            />
            <CardProduct
                id={ITEMS[19].id}
                btnText={"I'am item too"}
                className='home__card'
            />
            <CardProduct
                id={ITEMS[6].id}
                btnText={"Hey, so am I"}
                className='home__card'
            />
        </div>
    </>
)

export default Home;