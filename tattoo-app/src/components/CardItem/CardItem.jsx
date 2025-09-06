import React from "react";
import cardImg from '@images/card-item.png';
import './cardItem.css';

const CardItem = ({ product, addToCart }) => {
    const { percentsale, productname, price, oldprice, rate } = product;
    console.log('CardItem');
    return (
        <li className="card">
            <div className="card__image">
                <img src={cardImg} alt="img" />
                <span>{percentsale}% OFF</span>
            </div>
            <h4 className="card__title">{productname}</h4>
            <div className="card__summary">
                <div className="card__pricing">
                    <span className="card__price">${price}</span>
                    <sub className="card__sale">${oldprice}</sub>
                </div>
                <div className="card__rate">
                    <div className="card__stars">
                        {
                            [...Array(rate)].map((_, i) => (
                                <i key={i} className="fa-solid fa-star"></i>
                            ))
                        }
                    </div>
                    <span className="card__score">{rate.toFixed(1)}</span>
                </div>
            </div>
            <a onClick={() => addToCart(product)} className="card__btn">
                <i className="fa-solid fa-cart-plus"></i>
                Add to cart
            </a>

        </li>
    )
}

export default React.memo(CardItem);