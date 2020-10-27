import React, { useState } from 'react';
import './Filters.scss'

const Filters = ({ className }) => {

    const [isOpen, setIsOpen] = useState({
        price: false,
        colors: false,
        size: false,
    });
    const { price, colors, size } = isOpen;

    // const handleSetIsOpen = (label, setting) => {
    //     // setLabel(label);
    //     setIsOpen(!isOpen);
    //     // setSearchResults(setting);
    // }

    const filterOptions = [
        {
            id: 1,
            label: 'Price',
            name: price,
            setting: { price: !isOpen.price },
            // content: <input
            //     type='range'
            //     min={0}
            //     max={1000}
            //     step={2}
            // />
            content: 'price'
        },
        {
            id: 2,
            label: 'Colors',
            name: colors,
            setting: { colors: !isOpen.colors },
            content: 'colors'
        },
        {
            id: 3,
            label: 'Size',
            name: size,
            setting: { size: !isOpen.size },
            content: 'size'
        },
    ];

    return (
        <div className={`filters ${className}`}>
            <div className='filters__header'>Filter by</div>
                <ul className='filters__list'>
                    {filterOptions.map(({ id, label, name, setting, content }) => {
                        return (
                            <li key={id}>
                                <button
                                    className={`filters__btn ${name ? 'filters__btn--active' : ''}`}
                                    onClick={() => setIsOpen(setting)}
                                >
                                    {label}
                                </button>
                                <div className={`filters__content ${name ? 'filters__content--active' : ''}`}>{content}</div>
                            </li>
                        )
                    })}
                </ul>
        </div>
    )
}

export default Filters;