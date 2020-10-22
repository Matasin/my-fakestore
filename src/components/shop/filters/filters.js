import React, { useState } from 'react';
import './filters.scss'

const Filters = ({ className }) => {

    const [isOpen, setIsOpen] = useState({
        price: false,
        colors: false,
        size: false,
    });

    const setSetting = ( value ) => {
        setIsOpen({ value : !isOpen.value})
    }
    return (
        <div className={`filters ${className}`}>
            <div className='filters__header'>Filter by</div>
            <ul className='filters__list'>
                <li>
                    <button
                        className={`filters__btn ${isOpen ? '' : 'filters__btn--active'}`}
                        onClick={() => setIsOpen({ price : !isOpen.price})}
                    >
                        Price
                    </button>
                    
                    <div className={`filters__content ${isOpen.price ? 'filters__content--active' : ''}`}>Slider</div>
                </li>
                <li>
                    <button
                        className={`filters__btn ${isOpen ? '' : 'filters__btn--active'}`}
                        onClick={() => setIsOpen({ colors : !isOpen.colors})}
                    >
                        Colors
                        </button>
                    <div className={`filters__content ${isOpen.colors ? 'filters__content--active' : ''}`}>Colors</div>
                </li>
                <li>
                    <button
                        className={`filters__btn ${isOpen ? '' : 'filters__btn--active'}`}
                        onClick={() => setIsOpen({ size : !isOpen.size})}
                    >
                        Size
                    </button>
                    <div className={`filters__content ${isOpen.size ? 'filters__content--active' : ''}`}>Size</div>
                </li>
            </ul>
        </div>
    )
}

export default Filters;