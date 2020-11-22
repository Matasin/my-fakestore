import React, { useContext } from 'react';
import './cart.css'

import { Helmet } from 'react-helmet';
import { CartContext } from '../../context/cart-context';
import ProductOrder from '../../components/product-order/product-order'

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
        setCartItems([]) // refresing component and there is no reason of using history etc
    }
    return (
        cartItems.length === 0 ?
            (<DidNotMatch
                header='Cart is empty for now'
                text='But you can change it! '
                link='shop'
            />
            ) : (
                <div className='cart'>
                    <Helmet title={`Fake shop | Cart (${cartItems.length})`} />
                    <div className='order-products'>
                        <h3 className='order-products__header'>My Cart: {cartItems.length}</h3>
                        {cartItems.map(({ id, title, price, size, quantity }) => {
                            return (
                                <ProductOrder
                                    key={id}
                                    id={id}
                                    title={title}
                                    price={price}
                                    size={size}
                                    quantity={quantity}
                                    callback={() => removeFromCart(id)}
                                />
                            )
                        })}
                        <button onClick={clearCart} className='btn-primary'>clear cart</button>
                    </div>
                    <div className='order-summary'>
                        summary here
                    </div>
                </div>
            )
    )
}

export default Cart;
