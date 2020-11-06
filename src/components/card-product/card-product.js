import React from 'react';
import './card-product.css'

import { Link } from 'react-router-dom'
import LazyImage from '../../lazy-image'

const CardProduct = ({ id, title, price, btnText, className, disableLink }) => {
    const Image = process.env.PUBLIC_URL + `./assets/products/${id}-min.jpeg`

    const HandleClickAction = (props) => {
        return disableLink ?
            <> {props.children} </>
            :
            <Link to={`shop/${id}`} className='link'> {props.children} </Link>
    }

    return (
        <div className={`${className} card-product`}>
            <HandleClickAction>
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
                    <p>{price}</p>
                </div>
            </HandleClickAction>
        </div>
    )
}
export default CardProduct