import React, { useEffect, useState } from 'react';
import './product-detail.css';

import ITEMS from '../../context/products.json'
import { Link } from 'react-router-dom';
import ProductImagePreview from '../../components/p-detail/product-image-preview/product-image-preview'
import ProductData from '../../components/p-detail/product-data/product-data'

const ProductDetail = ({ match }) => {
    const [item, setItem] = useState({});
    const { id, title, price, summary, description } = item;
    const Image = `/${process.env.PUBLIC_URL}./assets/products/${id}-min.png`

    useEffect(() => {
        ITEMS.find(item => parseInt(match.params.id) === item.id && setItem(item));
    })
    if (match.params.id >= ITEMS.length + 1) return <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>We don't have that products, check url</div>

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
                />
            </div>
        </div>
    )
}

export default ProductDetail;