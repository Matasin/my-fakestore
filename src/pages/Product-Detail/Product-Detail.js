import React, { useEffect, useState } from 'react';
import './product-detail.scss';

import ITEMS from '../../context/products.json'
import ProductImagePreview from '../../components/product-image-preview/product-image-preview'
import { Link } from 'react-router-dom';

const ProductDetail = ({ match }) => {
    const [item, setItem] = useState({});
    const { id, title, price, summary, description, category } = item;
    const Image = `/${process.env.PUBLIC_URL}./assets/products/${id}-min.png`

    useEffect(() => {
        ITEMS.filter(item => parseInt(match.params.id) === item.id && setItem(item));
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
                    className='hide'
                />
                <p style={{width: '50%'}}>cos</p>
                {/* <p>{title}</p>
                <p>{price}$</p>
                <p>{summary}</p>
                <p>{description}</p>
                <p>{category}</p> */}
            </div>
        </div>
    )
}

export default ProductDetail;