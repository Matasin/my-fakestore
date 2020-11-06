import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

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
        </div>
    )
}

export default Cart;
