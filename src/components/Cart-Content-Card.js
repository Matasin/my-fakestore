import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'



const CartContentRight = ( { cartContent } ) => {
    const localData = localStorage.getItem('cart'); //get item from localstorage
    const localCart = JSON.parse(localData); //Data about current user

    const [ cart, ] = useState(localCart)
    let history = useHistory();
    const ID = cartContent.id

    const removeFromCart = () => {
        if(cart.length <= 1) {
            localStorage.removeItem('cart');
            return history.go(0);
        }
        const newCart = [...cart].filter( item => {
            return item.id !== ID;
        })
        localStorage.setItem('cart', JSON.stringify(newCart));
        history.go(0);

    }
    return (
        <>
            <div className='Cart-Content-Card-Up'>
                Guantity: ?
            </div>
            <div className='Cart-Content-Card-Down'>
                <Link
                    to= {`/products/${ID}`}
                >
                    <img 
                        src= {`${cartContent.image}`} 
                        alt= {'Product'}
                    />
                </Link>
                <Link
                    to= {`/products/${ID}`}
                >
                    <p> {cartContent.title} </p>
                </Link>
                <p> <u>{cartContent.price}</u>$ </p>
                <span 
                    className="Cart-Content-Remove-Btn"
                    onClick={removeFromCart}
                >
                    &times;
                </span>
            </div>   
        </>     
    )
}
export default CartContentRight