import React, { useState, useEffect } from 'react';

import CartContentCard from './Cart-Content-Card'

const CartNumber = ( { ID } ) => {
    const [cartContent, setCartContent] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${ID}`)
            .then(response => response.json())
            .then(data => setCartContent(data))
    }, [ID]);


    return (
        <div className='Cart-Content-Container'>
            <div className='Cart-Content'>
                <CartContentCard
                    cartContent= { cartContent }
                />
            </div>
        </div>
    )
}
export default CartNumber