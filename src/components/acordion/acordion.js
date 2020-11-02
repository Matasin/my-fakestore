import React, { useState } from 'react';
import './acordion.css'

const Acordion = ({ label, content, className }) => {
    const [isActive, setIsActive] = useState(false);
    const handleAction = () => {
        setIsActive(!isActive);
    }
    return (
        <div
            className={`acordion ${isActive ? 'acordion--active' : ''} ${className ? className : ''}`}
        >
            <button className='acordion__btn' onClick={handleAction}>{label}</button>
            <div className='acordion__content'>{content}</div>
        </div>
    )
}
export default Acordion;