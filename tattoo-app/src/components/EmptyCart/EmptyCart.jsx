import './emptyCart.css';
const EmptyCart = () => {
    //console.log('EmptyCart');
    return (
        <li className='cart__item-empty'>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Cart is Empty</span>
            <span>Add items from the catalog</span>
        </li>
    )
}

export default EmptyCart;