import React from 'react';
import './product-card.scss'

import { Link } from 'react-router-dom'
import LazyImage from '../../lazy-image'

const ProductCard = ({ id, title, price, descritpion, category }) => {
    const Image = process.env.PUBLIC_URL + `./assets/products/${id}-min.png`

    return (
        <div className='card-product'>
            <Link
                to={`shop/${id}`}
                className='link'
            >
                <div className='card-product__wrapper'>
                    <LazyImage
                        src={Image}
                        alt='product-card'
                        height='100%'
                        className=''
                    />
                    <button className='btn-primary'>quick view</button>
                </div>
                <h3>{title}</h3>
                <p>${price}</p>
            </Link>
        </div>
    )
}
export default ProductCard