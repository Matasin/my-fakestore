import React from 'react';
import { Link } from 'react-router-dom'

const ProductsList = ( {products} ) => (
    <div className='Products-Container'>
        {products.map( product => {
            return (
                <Link 
                    to={`/products/${ product.id }`} key={ product.id } 
                    className='Products-Cards'>
                    <div>
                        <p className='Right'>
                            <b>{ product.price } $</b>
                        </p>
                        <img src={ product.image } alt={ product.image }/>
                        <p>
                            { product.title }
                        </p>
                    </div>
                </Link>
            )
        })}
    </div>
)
export default ProductsList