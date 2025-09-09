import React from 'react';
import './search.css';

const Search = ({ value, inputValue }) => {
    // console.log('Search');
    return (
        <div className="search">
            <div className="search__inner">
                <input id="search" type="text" placeholder="search" value={value} onChange={inputValue} />
                <label htmlFor="search"><i className="fa-solid fa-magnifying-glass"></i></label>
            </div>
        </div>
    )
}

export default React.memo(Search);