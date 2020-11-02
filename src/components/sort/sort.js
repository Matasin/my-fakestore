import React, { useState } from 'react';
import './sort.css'
import OutsideAction from '../../helpers/outside-action'

const Sort = ({ className, firstLabel, options, setAction }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [label, setLabel] = useState(firstLabel);

    const handleSet = (label, setting) => {
        setIsOpen(!isOpen);
        setLabel(label);
        setAction(setting);
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
                        {options.map(({ id, label, setting }) => {
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