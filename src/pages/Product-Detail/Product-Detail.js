import React, {useState, useEffect} from 'react';
import './Product-Detail.scss';
import { Link } from 'react-router-dom'
import ProductDetailCard from '../../components/Product-Detail-Card';

const ProductDetail = ( {match} ) => {
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        const fetchData = () => {
            fetch(`https://fakestoreapi.com/products/${match.params.id}`)
                .then(response => response.json())
                .then(data => setProduct(data))
        }
        fetchData();
    }, [match.params.id]);

    if(!product) {
        return (
            <div className='When-DidNot-Catch-Content'>
                <h4>We dont have that product in our store</h4>
                <h6>Please make sure url is correct</h6>
                <span>Let's see {' '}</span>
                <Link
                    to='/products'
                >
                    all products
                </Link>
            </div>
        )
    }
    return (
        <ProductDetailCard
            product= {product}
        />
  )
}
export default ProductDetail;
