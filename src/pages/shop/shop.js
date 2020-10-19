import React from 'react';
import './shop.scss'

import ITEMS from '../../context/products.json'
import ProductCard from '../../components/product-card/product-card'


const Shop = () => {
    return (
        <div className='shop'>
            {ITEMS.map(({ id, title, price, descritpion, category }) => {
                return (
                    <ProductCard
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        descritpion={descritpion}
                        category={category}
                        className='shop__card'
                        btnText='quick view'
                    />
                )
            })}
        </div>
    )
}

export default Shop;