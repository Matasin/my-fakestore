import React from 'react';
import './shop.scss'

import ITEMS from '../../context/products.json'
import Filters from '../../components/shop/filters/filters'
import Sort from '../../components/shop/sort/sort'
import CardProduct from '../../components/card-product/card-product'


const Shop = () => {
    return (
        <div className='shop'>
            <header className='shop__header'>Shop</header>
            
            <div className='shop__content-c'>
                <Filters className='shop__filters'/>
                <div className='shop__products'>
                    <Sort className=''/>
                    {ITEMS.map(({ id, title, price, descritpion, category }) => {
                        return (
                            <CardProduct
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
            </div>
        </div>
    )
}

export default Shop;