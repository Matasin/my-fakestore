import React, { useState } from 'react';
import './sort.scss'

const options = [
    'Newest',
    'Price (low to high)',
    'Price (high to low)',
    'Name A-Z',
    'Name Z-A',
]

const Sort = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [label, setLabel] = useState('sort by');

    const handleSet = (option) => {
        setLabel(option);
        setIsOpen(!isOpen);
    }

    return (
        <div className={`sort ${className}`}>
            <button
                className='sort__btn btn-primary'
                onClick={() => setIsOpen(!isOpen)}
            >
                {label}
                <span className={`chevron ${isOpen ? 'top' : 'bottom'}`}></span>
            </button>
            {
                isOpen ?
                    <ul className='sort__list'>
                        {options.map((option, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => handleSet(option)}
                                >
                                    {option}
                                </li>
                            )
                        })}
                    </ul>
                    : null
            }
        </div>

    )
}

export default Sort;