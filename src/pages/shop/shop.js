import React, { useState, useEffect } from 'react';
import './shop.css'
import { Helmet } from 'react-helmet';

import ITEMS from '../../context/products.json';
import Filters from '../../components/shop/filters/filters';
import Sort from '../../components/sort/sort';
import Search from '../../components/shop/search/search';
import CardProduct from '../../components/card-product/card-product';

const Shop = () => {
    const PRODUCTS = ITEMS.map(x => x);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const results = ITEMS.filter(({ title }) => (
            title.toLowerCase().includes(searchTerm.toLowerCase())
        ));
        setSearchResults(results);
    }, [searchTerm])

    const sortResultTo = (expression) => setSearchResults([...expression]);
    const handleSearchByName = (event) => setSearchTerm(event.target.value);
    const handleClear = () => {
        sortResultTo(ITEMS.sort((a, b) => a.id - b.id));
        setSearchTerm('');
    }
    const minPrice = (event) => {
        sortResultTo(PRODUCTS.filter(({ price }) => price > event.target.value))
    }
    const maxPrice = (event) => {
        sortResultTo(PRODUCTS.filter(({ price }) => price < event.target.value))
    }

    const optionsToSet = [
        {
            id: 1,
            label: 'Newest',
            setting: handleClear
        },
        {
            id: 2,
            label: 'Price (high to low)',
            setting: () => sortResultTo(searchResults.sort((a, b) => b.price - a.price))
        },
        {
            id: 3,
            label: 'Price (low to high)',
            setting: () => sortResultTo(searchResults.sort((a, b) => a.price - b.price))
        },
        {
            id: 4,
            label: 'Name A-Z',
            setting: () => sortResultTo(searchResults.sort((a, b) => a.title.localeCompare(b.title)))
        },
        {
            id: 5,
            label: 'Name Z-A',
            setting: () => sortResultTo(searchResults.sort((a, b) => b.title.localeCompare(a.title)))
        },
    ];

    return (
        <div className='shop'>
            <Helmet title='Fake shop | Shop'/>
            
            <header className='shop__header'>Shop</header>
            <div className='shop__content-c'>
                <Filters
                    className='shop__filters'
                    setAction={setSearchResults}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                />
                <div className='shop__products'>
                    <div className='settings-right'>
                        <Search
                            className='settings-right__search'
                            value={searchTerm}
                            handleChange={handleSearchByName}
                        />
                        <Sort
                            className='settings-right__sort'
                            firstLabel='sort by'
                            options={optionsToSet}
                            setAction={setSearchResults}
                        />
                    </div>

                    {searchResults.length === 0 ?
                        <h4 style={{ width: '100%', textAlign: 'center', fontWeight: '500' }}>
                            Are you sure looking for <b>{searchTerm}</b>? Seems like bad term.
                        </h4>
                        :
                        searchResults.map(({ id, title, price, descritpion, category }) => {
                            return (
                                <CardProduct
                                    key={id}
                                    id={id}
                                    title={title}
                                    price={`$${price}`}
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