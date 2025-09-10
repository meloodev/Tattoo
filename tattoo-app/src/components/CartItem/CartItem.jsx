import React, { useCallback, useMemo } from 'react';
import './cartItem.css';
const CartItem = ({ product, updateQuantity, removeFromCart }) => {
    //console.log('CartItem');

    const { id, productname, price, quantity } = product;
    const increment = useCallback(() => {
        if (quantity < 100) {
            updateQuantity(id, quantity + 1);
        }
    }, [id, quantity, updateQuantity])



    const decrement = useCallback(() => {
        // if (quantity > 0) {
        if (quantity === 1) {
             removeFromCart(id);
        }
        updateQuantity(id, quantity - 1);
        
        // }
    }, [id, quantity, updateQuantity])



    const total = useMemo(() => {
        return price * quantity
    }, [price, quantity])

    return (
        <li className="cart__item">
            <div className="cart__item-counter">
                <h4 className="cart__item-title">{productname}</h4>
                <div className="cart__item-remove" onClick={() => removeFromCart(id)}>
                    <i className="fa-solid fa-xmark"></i>
                </div>

            </div>
            <div className="cart__item-details">
                <div className="cart__item-btns">
                    <button  onClick={decrement}>-</button>
                    <span>{quantity}</span>
                    <button disabled={quantity >= 100} onClick={increment}>+</button>
                </div>

                <div className="cart__item-calculationcover">
                    <div className="cart__item-calculation">
                        <span>{price}</span>
                        <span>gel</span>
                        <span>x</span>
                        <span>{quantity}</span>
                    </div>
                    <div className="cart__item-total">
                        <span className="cart__item-totalprice">{total.toFixed(2)}</span>
                        <span>gel</span>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default React.memo(CartItem);