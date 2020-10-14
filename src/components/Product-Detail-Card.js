import React, { useContext } from 'react';

import { CartContext } from '../context/CartContext'

const ProductDetailCard = ( { product } ) => {
    const { cart, setCart } = useContext(CartContext)

    const addToCart = () => {
        alert('Added to cart');
        setCart([...cart, {id: product.id}]);
        localStorage.setItem('cart', JSON.stringify([...cart, {id: product.id}]));
    }

    return (
        <div className='Product-Detail-Container'>
            <div className='Product-Detail-Left Center'>
                <img 
                    src={product.image} 
                    alt={product.image}
                />
            </div>
            <div className='Product-Detail-Right'>
                <h3>
                    {product.title}
                </h3>
                <div>
                    Only: {product.price} $
                </div>
                <div className='Buttons-Product-Detail'> 
                    <button>
                        Buy Now
                    </button>
                    <button onClick={addToCart}>
                        Add to Card
                    </button>
                    
                </div>
                <div>
                    {product.description}
                </div>
            </div>
        </div>
    )
}
export default ProductDetailCard
