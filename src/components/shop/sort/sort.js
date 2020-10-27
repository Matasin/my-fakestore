import React, { useState } from 'react';
import './Sort.scss'
import OutsideAction from '../../../helpers/outside-action'

const Sort = ({ className, AtoZ, ZtoA, HightToLow, LowToHigh, setSearchResults, Newest }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [label, setLabel] = useState('sort by');

    const sortOptions = [
        {
            id: 1,
            label: 'Newest',
            setting: Newest
        },
        {
            id: 2,
            label: 'Price (high to low)',
            setting: HightToLow
        },
        {
            id: 3,
            label: 'Price (low to high)',
            setting: LowToHigh
        },
        {
            id: 4,
            label: 'Name A-Z',
            setting: AtoZ
        },
        {
            id: 5,
            label: 'Name Z-A',
            setting: ZtoA
        },
    ];

    const handleSet = (label, setting) => {
        setLabel(label);
        setIsOpen(!isOpen);
        setSearchResults(setting);
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
            {isOpen ?
                <OutsideAction action={() => setIsOpen(!isOpen)}>
                    <ul className='sort__list'>
                        {sortOptions.map(({ id, label, setting }) => {
                            return (
                                <li
                                    key={id}
                                    onClick={() => handleSet(label, setting)}
                                >
                                    {label}
                                </li>
                            )
                        })}
                    </ul>
                </OutsideAction>
                : null
            }
        </div>

    )
}

export default Sort;