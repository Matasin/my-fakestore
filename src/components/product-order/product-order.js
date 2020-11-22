import React from 'react';
import './product-order.css'

import LazyImage from '../../lazy-image'
import { Link } from 'react-router-dom'

const ProductOrder = ({ id, title, price, size, quantity, callback }) => {

    return (
        <div className='product-order'>
            <div className='product-order__image'>
                <Link to={`shop/${id}`}>
                    <LazyImage
                        src={`/${process.env.PUBLIC_URL}./assets/products/${id}-min.jpeg`}
                        alt='product-image'
                        height='200'
                        width='auto'
                    />
                </Link>
            </div>
            <div className='product-order__details'>
                <Link to={`shop/${id}`}>
                    <h4>{title}</h4>
                </Link>
                <p>${price}</p>
                <p>Size: {size}</p>
                <p>{quantity}</p>
            </div>
            <div className='product-order__subtotal'>${price}</div>
            <div className='product-order__remove-button'>
                <button onClick={callback} className='btn-primary'>X</button>
            </div>
        </div>
    )
}
export default ProductOrder