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
        setSearchResults(results)
    }, [searchTerm])

    const resultAtoZ = () => {
        const resultsAZ = ITEMS.sort((a, b) => a.title.localeCompare(b.title));
        setSearchResults([...resultsAZ]);
    }
    const resultZtoA = () => {
        const resultsZA = ITEMS.sort((a, b) => b.title.localeCompare(a.title));
        setSearchResults([...resultsZA]);
    }
    const resultLowToHigh = () => {
        const resultsLtH = ITEMS.sort((a, b) => a.price - b.price);
        setSearchResults([...resultsLtH]);
    }
    const resultHighToLow = () => {
        const resultsHtL = ITEMS.sort((a, b) => b.price - a.price);
        setSearchResults([...resultsHtL]);
    }
    const resultNewest = () => {
        const resultsNewest = ITEMS.sort((a, b) => a.id + 1 - b.id + 1);
        setSearchResults([...resultsNewest]);
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
                        {/* <button onClick={resultNewest}>new</button> */}
                        <Sort
                            className='settings-right__sort'
                            AtoZ={resultAtoZ}
                            ZtoA={resultZtoA}
                            HightToLow={resultHighToLow}
                            LowToHigh={resultLowToHigh}
                            Newest={resultNewest}
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