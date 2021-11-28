import React from 'react';

import './search.style.css'

export const Search = ({handleChange,placeholder}) => {
    
    return (
        <div >
            <input
                className="search"
                type="search"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}
