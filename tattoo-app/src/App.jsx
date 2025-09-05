import { useState, useRef, useEffect } from "react";
import SignIn from "@comp/SignIn/SignIn";
import Registration from '@comp/Registration/Registration';
import Recovery from '@comp/Recovery/Recovery';
import PageNotFound from "@comp/PageNotFound/PageNotFound";
import CardItem from "@comp/CardItem/CardItem";
import MessageBox from "@comp/MessageBox/MessageBox";
import Modal from "@comp/ModalMessage/ModalMessage";
import CustomFilter from "@comp/CustomFilter/CustomFilter";
import HeaderControls from "@comp/HeaderControls/HeaderControls";
import CardNotFound from "@comp/CardNotFound/CardNotFound";

import Cart from "@comp/Cart/Cart";
import './App.css';


const products = [
  { id: 1, percentsale: 25, productname: 'MacBook Air M2', price: 599, oldprice: 799, rate: 5 },
  { id: 2, percentsale: 15, productname: 'iPhone 14', price: 849, oldprice: 999, rate: 4 },
  { id: 3, percentsale: 30, productname: 'iPad Pro', price: 699, oldprice: 999, rate: 5 },
  { id: 4, percentsale: 20, productname: 'Apple Watch', price: 319, oldprice: 399, rate: 4 },
  { id: 5, percentsale: 10, productname: 'AirPods Pro', price: 219, oldprice: 249, rate: 5 },
  { id: 6, percentsale: 35, productname: 'MacBook Pro 14"', price: 1799, oldprice: 2799, rate: 5 },
  { id: 7, percentsale: 5, productname: 'Magic Keyboard', price: 89, oldprice: 94, rate: 4 },
  { id: 8, percentsale: 50, productname: 'HomePod mini', price: 99, oldprice: 199, rate: 3 },
  { id: 9, percentsale: 40, productname: 'iMac 24"', price: 1299, oldprice: 2199, rate: 2 },
  { id: 10, percentsale: 12, productname: 'Apple Pencil', price: 99, oldprice: 113, rate: 1 }
];

const App = () => {
  const [value, setValue] = useState('');
  const [filtered, setFiltered] = useState(products);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const timerRef = useRef(null);

  const cartShown = () => {
    setShowCart(prev => !prev);
  }
  const menuCartRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuCartRef.current &&
        !menuCartRef.current.contains(e.target) &&
        !e.target.closest('.card__btn')) {
        setShowCart(false);
      }
    }
    if (showCart) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCart]);


  const inputValue = (e) => {
    const target = e.target.value;
    setValue(target);
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const result = products.filter(item =>
        item.productname.toLowerCase().includes(target.toLowerCase().trim())
      );
      setFiltered(result);

      // setPage(1); //
      // setDisplayed(result.slice(0, perPage));//
    }, 300);
  }

  const updateQuantity = (productId, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };


  const addToCart = (product) => {
    setCart(prevCart => {
      let found = false;

      const newCart = prevCart.map(item => {
        if (item.id === product.id) {
          found = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return found ? newCart : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header__cover">
            <HeaderControls inputValue={inputValue} value={value} items={cart} cartShown={cartShown} />
            <div className="header__filter">
              <CustomFilter />
            </div>
          </div>
        </div>
      </header>

      <main>

        <section className="products">
          <div className="container">
            <div className="products__inner">
              <ul className="products__items">
                {filtered.length > 0 ? filtered.map((item) => (
                  <CardItem
                    key={item.id}
                    product={item}
                    addToCart={addToCart}
                  />
                )) : <CardNotFound />}
              </ul>
            </div>

            <aside className="cart__aside" ref={menuCartRef}>
              {showCart && <Cart
                items={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />}
            </aside>
          </div>
        </section>



      </main>

      {/* <div className="container"> */}
      {/* <Search /> */}
      {/* <CustomFilter /> */}

      {/* <Modal/> */}
      {/* <MessageBox/> */}
      {/* <SignIn /> */}
      {/* <Registration /> */}
      {/* <Recovery /> */}
      {/* <PageNotFound /> */}

      {/* <CardItem /> */}


      {/* </div> */}
    </>
  )
}

export default App;