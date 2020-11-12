import React, { useContext } from 'react';
import './cart.css'

import { Helmet } from 'react-helmet';
import { CartContext } from '../../context/cart-context';

import DidNotMatch from '../../components/did-not-match/did-not-match'

const Cart = () => {
    const [cartItems, setCartItems] = useContext(CartContext);

    const removeFromCart = (orderId) => {
        const itemsAfterDelete = [...cartItems].filter(item => {
            return item.id !== orderId;
        });
        setCartItems(itemsAfterDelete)
    }
    const clearCart = () => {
        localStorage.removeItem('items');
    }
    return (
        <div className='cart'>
            <Helmet title={`Fake shop | ${cartItems.length !== 0 && `Items in cart: ${cartItems.length}`}`} />
            {cartItems.length === 0 ?
                <DidNotMatch
                    header='Cart is empty for now'
                    text='But you can change it! '
                    link='shop'
                />
                :
                <>
                    <h4>Products in cart: {cartItems.length}</h4>
                    <button onClick={clearCart} className='btn-primary'>clear cart</button>
                    {cartItems.map(({ id, title, price, summary, description, size, quantity }) => {
                        return (
                            <div key={id}>
                                <li>id: {id}</li>
                                {/* <li>{title}</li>
                                <li>{price}</li>
                                <li>{summary}</li>
                                <li>{description}</li>
                                <li>{size}</li> */}
                                <li>quantity: {quantity}</li>
                                <button onClick={() => removeFromCart(id)}>Remove</button>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }

        </div>
    )
}

export default Cart;
