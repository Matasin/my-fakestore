import React from 'react';
import './product-image-preview.scss'

import CardProduct from '../../components/card-product/card-product'

const ProductImagePreview = ({ id, summary }) => {
    return (
        <div className='product-image-preview'>
            <CardProduct
                id={id}
                className=''
            />
            <p
                className='product-image-preview__summary'
            >
                {summary}
            </p>
        </div>
    )
}

export default ProductImagePreview;