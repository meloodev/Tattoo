import { useParams, useNavigate } from "react-router";
import React from 'react'

import { useState, useEffect } from "react";

import products from "@products/products";

import img from '@images/card-item.png';

import PageNotFound from '@pages/PageNotFound/PageNotFound';
import './cardPage.css';

const CardDetails = ({ addToCart, items }) => {
    const navigate = useNavigate();
    const { id } = useParams();

    //{ addToCart, displayed }
    //  let productItem = displayed.filter((item) => (item.id === Number(id)));


    // console.log(items);


    const itemData = products.find(item => item.id === Number(id));

    if (!itemData) {
        return <PageNotFound />
    }

    const { productname, rate, percentsale, price } = itemData;
    // console.log(itemData);
    // const { quantity } = items;

    const [quantity, setQuantity] = useState(true);

    useEffect(() => {
        const currentItem = items.find(item => item.id === itemData.id);
        setQuantity(!currentItem?.quantity > 0);
    }, [items, itemData.id]);

    const addItemFromCard = () => {
        const currentItem = items.find(item => item.id === itemData.id);
        const currentQuantity = currentItem?.quantity || 0;

        if (currentQuantity === 0) {
            addToCart(itemData);
            setQuantity(true);
        } else {
            setQuantity(false);
        }
    }

    //   { id: 60, productname: 'AirPods Everyday', price: 179, oldprice: 209, percentsale: 12, rate: 4 }
    return (
        <div className="info">
            <div className="info__inner">
                <div className="info__header">
                    <img src={img} />
                    <h3 className="info__details-title">
                        {productname}
                    </h3>
                </div>
                <div className="info__details">
                    <div className="info__details-rates">
                        <span className="info__details-rate">{rate.toFixed(1)}</span>
                        <ul className="info__details-stars">
                            {[...Array(rate)].map((_, i) => (
                                <li key={i}><i className="fa-solid fa-star"></i></li>
                            ))}
                        </ul>
                    </div>
                    <div className="info__deal">
                        <span className="info__deal-sale">{percentsale}%</span>
                        <span className="info__deal-price"><span>{price}</span><sup>99</sup></span>
                    </div>

                    <div className="info__descr">
                        <h3 className="info__descr-title">About this item</h3>
                        <p className="info__descr-text">
                            MAGSAFE CHARGING COMPATIBLE — With built-in magnets that align perfectly with your
                            iPhone 16
                            Pro Max, this case offers a magical attach experience to other MagSafe accessories and
                            is
                            MagSafe charging compatible.
                        </p>
                    </div>
                </div>
                <div className="info__btns">
                    <button onClick={() => navigate('/')}>go back</button>
                    <button onClick={addItemFromCard}>{quantity ? 'add to cart' : 'item exist'}</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(CardDetails);