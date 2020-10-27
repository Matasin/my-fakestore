import React from 'react';
import './Card-Product.scss'

import { Link } from 'react-router-dom'
import LazyImage from '../../lazy-image'

const CardProduct = ({ id, title, price, btnText, className }) => {
    const Image = process.env.PUBLIC_URL + `./assets/products/${id}-min.png`

    return (
        <div className={`${className} card-product`}>
            <Link to={`shop/${id}`} className='link'>
                <div className='card-product__wrapper'>
                    <LazyImage
                        src={`/${Image}`}
                        alt='product-card'
                        height='100%'
                        className=''
                    />
                    <button className='btn-primary'>
                        <span>{btnText}</span>
                    </button>
                </div>
                <div className='card-product__label'>
                    <h3>{title}</h3>
                    <p>${price}</p>
                </div>
            </Link>
        </div>
    )
}
export default CardProduct