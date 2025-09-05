import logo from '@images/logo.svg';
import Search from "@comp/Search/Search";

import './headerControls.css';
const Header = () => {
    return (
        <div className="header__inner">
            <a href="#" className="header__logo">
                <img src={logo} alt="logo" />
            </a>
            <Search />
            <ul className="auth__cart">
                <li className="header__cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>0</span>
                </li>
                <li>
                    <button className="header__signin">
                        <i class="fa-solid fa-user"></i>
                        SignIn
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Header;