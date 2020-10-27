import React, { useState, useEffect } from 'react';
import './Shop.scss'

import ITEMS from '../../context/products.json'
import Filters from '../../components/shop/filters/Filters'
import Sort from '../../components/shop/sort/Sort'
import Search from '../../components/shop/search/Search'
import CardProduct from '../../components/card-product/Card-Product'


const Shop = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const results = ITEMS.filter(({ title }) => (
            title.toLowerCase().includes(searchTerm.toLowerCase())
        ));
        setSearchResults(results);
    }, [searchTerm])

    const resultTo = (expression) => {
        const expressionResult = expression;
        setSearchResults([...expressionResult]);
    }
    const handleSearchByName = (event) => setSearchTerm(event.target.value);

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
                            handleChange={handleSearchByName}
                        />
                        <Sort
                            className='settings-right__sort'
                            AtoZ={() => resultTo(ITEMS.sort((a, b) => a.title.localeCompare(b.title)))}
                            ZtoA={() => resultTo(ITEMS.sort((a, b) => b.title.localeCompare(a.title)))}
                            HightToLow={() => resultTo(ITEMS.sort((a, b) => b.price - a.price))}
                            LowToHigh={() => resultTo(ITEMS.sort((a, b) => a.price - b.price))}
                            Newest={() => resultTo(ITEMS.sort((a, b) => a.id - b.id))}
                            setSearchResults={setSearchResults}
                        />
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