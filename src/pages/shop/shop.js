import React, { useState, useEffect } from 'react';
import './shop.scss'

import ITEMS from '../../context/products.json'
import Filters from '../../components/shop/filters/filters'
import Sort from '../../components/shop/sort/sort'
import Search from '../../components/shop/search/search'
import CardProduct from '../../components/card-product/card-product'


const Shop = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const results = ITEMS.filter(({ title }) => (
            title.toLowerCase().includes(searchTerm.toLowerCase())
        ));
        setSearchResults(results);
    }, [searchTerm])
    const handleChange = (event) => setSearchTerm(event.target.value);

    return (
        <div className='shop'>
            <header className='shop__header'>Shop</header>

            <div className='shop__content-c'>
                <Filters className='shop__filters' />
                <div className='shop__products'>
                    <div className='settings-right'>
                        <Search
                            className='settings-right__search'
                            value={searchTerm}
                            handleChange={handleChange}
                        />
                        <Sort className='settings-right__sort' />
                    </div>


                    {searchResults.length === 0 ?
                        <h5 style={{ width: '100%', textAlign: 'center' }}>Couldn't find this item</h5>
                        :
                        searchResults.map(({ id, title, price, descritpion, category }) => {
                            return (
                                <CardProduct
                                    key={id}
                                    id={id}
                                    title={title}
                                    price={price}
                                    descritpion={descritpion}
                                    category={category}
                                    className='shop__card'
                                    btnText='quick view'
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Shop;