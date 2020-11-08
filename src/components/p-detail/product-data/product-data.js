import React, { useState, useContext } from 'react';
import './product-data.css'

import { CartContext } from '../../../context/cart-context';
import Acordion from '../../acordion/acordion'
import Sort from '../../sort/sort'

const returnPolicyFormula = "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase.Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence."

const ProductData = ({ item }) => {
    const [itemsCart, setItemsCart] = useContext(CartContext);
    const { id, title, price, summary, description } = item;

    const [size, setSize] = useState();
    const [error, setError] = useState(false);
    const [guantity, setGuantity] = useState(1);

    const validInput = (e) => {
        if (e.key === 'e' || e.key === '-' || e.key === '0' || e.key === '.' || e.key === ','){
            e.preventDefault();
            setGuantity(1)
        }
    }
    const optionsToSet = [
        {
            id: 1,
            label: 'Small',
            setting: () => setSize('Small') & setError(false)
        },
        {
            id: 2,
            label: 'Medium',
            setting: () => setSize('Medium') & setError(false)
        },
        {
            id: 3,
            label: 'Large',
            setting: () => setSize('Large') & setError(false)
        },
    ];

    const addToCart = () => {
        if (size) {
            setItemsCart([...itemsCart, {
                id: id,
                title: title,
                price: price,
                summary: summary,
                description: description,

                size: size,
                guantity: guantity === '' && 1
            }])
            return alert('added');
        }
        setError(true);
    }
    return (
        <div className='product-data'>
            <h1 className='product-data__header'>{title}</h1>
            <div className='product-data__price'>${price}</div>

            <Sort
                className={`product-data__sort ${error && 'product-data__sort--error'}`}
                firstLabel='select'
                options={optionsToSet}
                setAction={setSize}
            />

            <div className='product-data__label'>Guantity</div>
            <input
                className='product-data__quantity'
                type='number'
                value={guantity}
                onChange={(e) => setGuantity(e.target.value)}
                min={1}
                onKeyDown={validInput}
            />

            <button className='btn-primary product-data__btn-add' onClick={addToCart}>add to cart</button>
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