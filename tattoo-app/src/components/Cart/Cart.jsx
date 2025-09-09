import CartItem from '@comp/CartItem/CartItem';
import CartFooter from '@comp/CartFooter/cartFooter';
import EmptyCart from '@comp/EmptyCart/EmptyCart';
import './cart.css';
const Cart = ({ items, updateQuantity, removeFromCart }) => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
   // console.log('Cart');
    return (
        <div className="cart">
            <div className="cart__header">
                <h2 className="cart__close">
                    <i className="fa-solid fa-xmark"></i>
                </h2>
                <h3 className="cart__count">
                    <span>{totalItems}</span> pc</h3>
            </div>
            <ul className="cart__items">
                {items.length > 0 ? (items.map((item) => (
                    <CartItem key={item.id} product={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
                ))) : <EmptyCart />}
            </ul>
            {items.length > 0 && <CartFooter items={items} />}
        </div>
    )
}

export default Cart;