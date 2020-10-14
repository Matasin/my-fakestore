import React, {useState, useEffect} from 'react';
import './Products.scss';
import ProductsList from '../../components/ProductsList';
import ProductsNav from '../../components/ProductsNav';

const Products = () => {
    const [products, setProducts] = useState([]); 
    const [actuallCategory, setActuallCategory] = useState('All'); 
    const URL = `https://fakestoreapi.com/products`; 

    const fetchData = ( specificCategory ) => {
        (
            specificCategory !== undefined 
            ? 
            fetch(`${URL}${ specificCategory }`)
            :
            fetch(`${URL}`)
        )
        .then(response => response.json())
        .then(data => setProducts(data))

        if (specificCategory) specificCategory = specificCategory.replace('/category/' , '');
        (specificCategory === undefined ? setActuallCategory('All') : setActuallCategory(specificCategory));
    };

    useEffect(fetchData, []);
    
    return (
        <div className='Products'>
            <ProductsNav 
                actuallCategory= {actuallCategory}
                fetchData= {fetchData}
            />
            <ProductsList
                products= {products}
            />
        </div>
  )
}
export default Products;
