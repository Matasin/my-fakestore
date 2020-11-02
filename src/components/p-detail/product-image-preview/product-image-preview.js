import React from 'react';
import './product-image-preview.css'

import CardProduct from '../../card-product/card-product'

const ProductImagePreview = ({ id, summary }) => {
    return (
        <div className='product-image-preview'>
            <CardProduct
                id={id}
                className=''
                disableLink={true}
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