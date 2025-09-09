import React from 'react';
import './customFilter.css';


const presets = ['iPhone', 'Samsung', 'MacBook', 'iPad', 'Apple', 'AirPods'];

const CustomFilter = ({ customSearch }) => {
    // console.log('CustomFilter');
    return (
        <div className="filter">
            <ul className="filter__items">
                {presets.map((item, i) => (
                    <li key={i}><a onClick={() => customSearch(item)} className="filter__item" href="#">{item}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default React.memo(CustomFilter);