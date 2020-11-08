import React, { useEffect, useContext } from 'react';

import { Helmet } from 'react-helmet';
import { CartContext } from '../../context/cart-context';

import DidNotMatch from '../../components/did-not-match/did-not-match'

const Cart = () => {
    const [cartitems, setCartItems] = useContext(CartContext);

    useEffect(() => {   
        console.log(cartitems)
    }, [cartitems])


    const removeFromCart = (orderId) => {
        const itemsAfterDelete = [...cartitems].filter(item => {
            return item.id !== orderId;
        });
        setCartItems(itemsAfterDelete)
    }
    return (
        <div>
            <Helmet title={`Fake shop | ${cartitems.length !== 0 && `Items in cart: ${cartitems.length}`}`} />
            {cartitems.length === 0 ?
                <DidNotMatch
                    header='Cart is empty for now'
                    text='But you can change it! '
                    link='shop'
                />
                :
                <>
                    <h4>Products in cart: {cartitems.length}</h4>
                    {cartitems.map(({ id, title, price, summary, description, size, guantity }) => {
                        return (
                            <div key={id}>
                                <li>{title}</li>
                                <li>{price}</li>
                                <li>{summary}</li>
                                <li>{description}</li>
                                <li>{size}</li>
                                <li>{guantity}</li>
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
