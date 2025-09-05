import logo from '@images/logo.svg';
import Search from "@comp/Search/Search";

import './headerControls.css';
const HeaderControls = ({ value, inputValue, items, cartShown }) => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <div className="header__inner">
            <a href="#" className="header__logo">
                <img src={logo} alt="logo" />
            </a>
            <Search inputValue={inputValue} value={value} />
            <ul className="auth__cart">
                <li onClick={cartShown} className="header__cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>{totalItems}</span>
                </li>
                <li>
                    <button className="header__signin">
                        <i className="fa-solid fa-user"></i>
                        SignIn
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default HeaderControls;