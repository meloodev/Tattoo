import React from 'react';
import logo from '@images/logo.svg';
import Search from "@comp/Search/Search";
import RegistrForm from '@comp/Registration/Registration';
import SignIn from '@comp/SignIn/SignIn';

import { useState, useEffect, useRef } from 'react';

import './headerControls.css';
const HeaderControls = ({ value, inputValue, items, cartShown }) => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    const [form, setForm] = useState(false);
    const signinRef = useRef(null);
    const showSignInForm = () => {
        setForm(prev => !prev);
    }

    useEffect(() => {
        if (form) {
            document.body.classList.add('lock');
        }
        return () => {
            document.body.classList.remove('lock');
        }
    }, [form])


    useEffect(() => {
        function handleClickOutside(e) {
            if (!signinRef.current) return;
            const clickedOutside = !signinRef.current.contains(e.target);
            if (clickedOutside) {
                setForm(false);
            }
        }
        if (form) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [form]);

    //console.log('HeaderControls');
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
                    <button onClick={showSignInForm} className="header__signin">
                        <i className="fa-solid fa-user"></i>
                        SignIn
                    </button>
                </li>
            </ul>
            {form && <SignIn showSign={showSignInForm} formcontrol={signinRef} />}
        </div>
    )
}

export default React.memo(HeaderControls);