import React from 'react';
import './product-data.css'

import Acordion from '../../acordion/acordion'
import Sort from '../../sort/sort'

const returnPolicyFormula = "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase.Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence."

const ProductData = ({ title, price, description }) => {
    const optionsToSet = [
        {
            id: 1,
            label: 'Small',
        },
        {
            id: 2,
            label: 'Medium',
        },
        {
            id: 3,
            label: 'Large',
        },
    ];
    return (
        <div className='product-data'>
            <h1 className='product-data__header'>{title}</h1>
            <div className='product-data__price'>${price}</div>

            <Sort
                className='product-data__sort'
                firstLabel='select'
                options={optionsToSet}
                setAction={() => console.log('Not yet')} 
            />

            <button className='btn-primary product-data__btn-add'>add to cart</button>
            <button className='btn-primary product-data__btn-buy'>buy now</button>

            <Acordion
                label='product info'
                content={description}
            />
            <Acordion
                label='return and refund policy'
                content={returnPolicyFormula}
            />
        </div>
    )
}

export default ProductData;