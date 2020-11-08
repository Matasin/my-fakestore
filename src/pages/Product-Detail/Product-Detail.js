import React, { useEffect, useState } from 'react';
import './product-detail.css';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import ITEMS from '../../context/products.json';
import ProductData from '../../components/p-detail/product-data/product-data';
import ProductImagePreview from '../../components/p-detail/product-image-preview/product-image-preview';

import DidNotMatch from '../../components/did-not-match/did-not-match';

const ProductDetail = ({ match }) => {
    const [item, setItem] = useState({});
    const { id, title, summary } = item;
    const Image = `/${process.env.PUBLIC_URL}./assets/products/${id}-min.png`

    useEffect(() => {
        ITEMS.find(item => parseInt(match.params.id) === item.id && setItem(item));
    })
    if (match.params.id > ITEMS.length) return <DidNotMatch header='We cant find that product' text='Maybe URL is wrong or that ofert are no longer exist.' text2='For now:' link='shop' />


    return (
        <div className='product-detail'>
            <Helmet title={`Fake shop | ${title}`} />

            <Link to='/shop' className='product-detail__btn btn-primary link'>Back to shop</Link>

            <div className='product-detail__c-data'>
                <ProductImagePreview
                    id={id}
                    image={Image}
                    summary={summary}
                />
                <ProductData
                    item={item}
                />
            </div>
        </div>
    )
}

export default ProductDetail;