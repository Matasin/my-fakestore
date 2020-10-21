import React from 'react';

import ITEMS from '../../context/products.json'

const ProductDetail = ({match}) => {
    const ID = match.params.id - 1;
    const product = ITEMS[ID];
    if(!product) return <div>We don't have that products, check url</div>

    const { id, title, price, description, category } = product;
    const Image = process.env.PUBLIC_URL + `./assets/products/${id}-min.png`


    return (
        <div>
            <p>{ id }</p>
            <img 
                src={Image}
                alt='product-card'
                height='100%'
                className=''
            />
            <p>{ title }</p>
            <p>{ price }</p>
            <p>{ description }</p>
            <p>{ category }</p>
        </div>
    )
}

export default ProductDetail;