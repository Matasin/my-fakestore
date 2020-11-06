import React, { useEffect, useState, useContext } from 'react';
import './product-detail.css';

import ITEMS from '../../context/products.json'
import { CartContext } from '../../context/cart-context'
import { Link } from 'react-router-dom';
import ProductData from '../../components/p-detail/product-data/product-data'
import ProductImagePreview from '../../components/p-detail/product-image-preview/product-image-preview'

const ProductDetail = ({ match }) => {
    const [ items , setItems ] = useContext(CartContext);

    const [ item, setItem ] = useState({});
    const { id, title, price, summary, description } = item;
    const Image = `/${process.env.PUBLIC_URL}./assets/products/${id}-min.png`

    useEffect(() => {
        ITEMS.find(item => parseInt(match.params.id) === item.id && setItem(item));
    })
    if (match.params.id >= ITEMS.length + 1) return <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>We don't have that products, check url</div>

    const addToCart = () => {
        setItems([...items, {
            id: id, 
            title: title, 
            price: price, 
            summary: summary, 
            description: description
        }])
    }


    return (
        <div className='product-detail'>
            <Link to='/shop' className='product-detail__btn btn-primary link'>Back to shop</Link>
            <div className='product-detail__c-data'>
                <ProductImagePreview
                    id={id}
                    image={Image}
                    summary={summary}
                />
                <ProductData
                    title={title}
                    price={price}
                    description={description}
                    addToCart={addToCart}
                />
            </div>
        </div>
    )
}

export default ProductDetail;