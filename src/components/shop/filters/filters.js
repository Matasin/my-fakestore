import React from 'react';
import './filters.css'

import Acordion from '../../acordion/acordion'

const Filters = ({ className }) => {

    const filterOptions = [
        {
            id: 1,
            label: 'Price',
            content: 'there will be slider with price'
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
        <div className={`filters ${className}`}>
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
    )
}

export default Filters;