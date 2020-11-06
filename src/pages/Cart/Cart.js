import React, { useContext } from 'react';

import { Helmet } from 'react-helmet';
import { CartContext } from '../../context/cart-context';

import DidNotMatch from '../../components/did-not-match/did-not-match'

const Cart = () => {
    const [items, setItems] = useContext(CartContext);

    const removeFromCart = (orderId) => {
        const itemsAfterDelete = [...items].filter(item => {
            return item.id !== orderId;
        });
        setItems(itemsAfterDelete)
    }
    return (
        <div>
            <Helmet title={`Fake shop | ${items.length !== 0 && `Items in cart: ${items.length}`}`} />
            {items.length === 0 ?
                <DidNotMatch
                    header='Cart is empty for now'
                    text='But you can change it! '
                    link='shop'
                />
                :
                <>
                    <h4>Products in cart: {items.length}</h4>
                    {items.map(({ id, title, price, summary, description }) => {
                        return (
                            <div key={id}>
                                <li>{title}</li>
                                <li>{price}</li>
                                <li>{summary}</li>
                                <li>{description}</li>
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
