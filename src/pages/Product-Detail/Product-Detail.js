import React, { useEffect, useState } from 'react';

import ITEMS from '../../context/products.json'
import LazyImage from '../../lazy-image'

const ProductDetail = ({ match }) => {

    const [item, setItem] = useState({});
    const { id, title, price, description, category } = item;

    useEffect(() => {
        ITEMS.filter(item => parseInt(match.params.id) === item.id && setItem(item));
    })
    if (match.params.id >= ITEMS.length + 1) return <div style={{minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>We don't have that products, check url</div>

    const Image = process.env.PUBLIC_URL + `./assets/products/${id}-min.png`

    return (
        <div>
            <LazyImage
                src={Image}
                alt='product-card'
                className=''
            />
            <p>{title}</p>
            <p>{price}</p>
            <p>{description}</p>
            <p>{category}</p>
        </div>
    )
}

export default ProductDetail;