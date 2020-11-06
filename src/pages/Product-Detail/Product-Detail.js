import React, { useEffect, useState, useContext } from 'react';
import './product-detail.css';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cart-context';

import ITEMS from '../../context/products.json';
import ProductData from '../../components/p-detail/product-data/product-data';
import ProductImagePreview from '../../components/p-detail/product-image-preview/product-image-preview';

import DidNotMatch from '../../components/did-not-match/did-not-match';

const ProductDetail = ({ match }) => {
    const [items, setItems] = useContext(CartContext);

    const [item, setItem] = useState({});
    const { id, title, price, summary, description } = item;
    const Image = `/${process.env.PUBLIC_URL}./assets/products/${id}-min.png`

    useEffect(() => {
        ITEMS.find(item => parseInt(match.params.id) === item.id && setItem(item));
    })
    //  return <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>We don't have that products, check url</div>
    if (match.params.id > ITEMS.length) return <DidNotMatch header='We cant find that product' text='Maybe URL is wrong or that ofert are no longer exist.' text2='For now:' link='shop' />

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
            <Helmet title={`Fake shop | ${title}`} />

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