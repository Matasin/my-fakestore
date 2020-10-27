import React from 'react';
import './Search.scss'

const Search = ({ className, value, handleChange }) => {
    return (
        <div className={`search ${className}`}>
            <input
                className='search__input'
                type='text'
                placeholder='Search by name...'
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default Search;