import React from 'react';
import './Cart.scss';

import { Link, useHistory} from 'react-router-dom'
import CartContent from '../../components/Cart-Content'

const Cart = () => {
    const localData = localStorage.getItem('cart'); //get item from localstorage
    const cart = JSON.parse(localData); //Data about current user
    let history = useHistory();

    if(!cart || cart === null || cart.length === 0) {
        return (
            <div className='When-DidNot-Catch-Content'>
                <h4>You don't have items in cart</h4>
                <p>Lets order something</p>
                <span>
                    Go to
                    <Link to='/products'> Products </Link>
                </span>
            </div>
        )
    }
    const removeAllFromCart = () => {
        localStorage.removeItem('cart');
        history.go(0);
    }

    return (
        <div className='Cart'>
            <div style={{margin: '0 6vh'}}>Products in cart: {cart.length}</div>
            {cart.map( (cart, index) => {
                return (
                    <CartContent
                        ID= { cart.id }
                        key= { index }
                    /> 
                )
            })}
            <button 
                className='Cart-Content-Remove-All' 
                onClick={removeAllFromCart}
            >
                Remove all items from card
            </button>
        </div>
    )
}
export default Cart;
