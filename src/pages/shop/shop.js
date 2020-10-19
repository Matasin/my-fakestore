import React from 'react';

import ITEMS from '../../context/products.json'
import ProductCard from '../../components/product-card/product-card'


const Shop = () => {
    return (
        <div className='shop'>
            {ITEMS.map(({id, title, price, descritpion, category}) => {
                return (
                    <ProductCard
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        descritpion={descritpion}
                        category={category}
                    />
                )
            })}
        </div>
    )
}

export default Shop;