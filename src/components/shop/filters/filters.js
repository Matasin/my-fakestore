import React, { useState } from 'react';
import './filters.css'

import Acordion from '../../acordion/acordion'

const Filters = ({ className, minPrice, maxPrice }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toogleFilters = () => setIsOpen(!isOpen);

    const filterOptions = [
        {
            id: 1,
            label: 'Price',
            content:
                <div className='filters__inputs'>
                    <input
                        type='number'
                        min='1'
                        onChange={minPrice}
                        placeholder='Min price'
                    />
                    <span>$</span>
                    <input
                        type='number'
                        min='1'
                        onChange={maxPrice}
                        placeholder='Max price'
                    />
                    <span>$</span>
                </div>
        },
        {
            id: 2,
            label: 'Colors',
            content: 'there will be circle of colors you can select'
        },
        {
            id: 3,
            label: 'Size',
            content: 'there will be sizes'
        },
    ];

    return (
        <>
            <div className={`filters ${className} ${isOpen ? 'filters--active' : ''}`}>
                <div className='filters__header'>Filter by</div>
                <ul className='filters__list'>
                    {filterOptions.map(({ id, label, content }) => {
                        return (
                            <Acordion
                                key={id}
                                label={label}
                                content={content}
                                className='filters__acordion'
                            />
                        )
                    })}
                </ul>
            </div>
            <button 
                className={`filters__button btn-primary  ${isOpen ? 'filters__button--active' : ''}`}
                onClick={toogleFilters}
            >
                Filters
            </button>
        </>
    )
}

export default Filters;