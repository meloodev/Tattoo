import { useState, useRef, useEffect, useCallback } from "react";
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
import LoadMore from "@comp/LoadMore/LoadMore";
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
  { id: 10, percentsale: 12, productname: 'Apple Pencil', price: 99, oldprice: 113, rate: 1 },
  { id: 11, percentsale: 22, productname: 'MacBook Air M2', price: 649, oldprice: 829, rate: 4 },
  { id: 12, percentsale: 18, productname: 'iPhone 14', price: 899, oldprice: 1099, rate: 5 },
  { id: 13, percentsale: 28, productname: 'iPad Pro', price: 729, oldprice: 1013, rate: 4 },
  { id: 14, percentsale: 15, productname: 'Apple Watch', price: 349, oldprice: 411, rate: 3 },
  { id: 15, percentsale: 8, productname: 'AirPods Pro', price: 229, oldprice: 249, rate: 5 },
  { id: 16, percentsale: 40, productname: 'MacBook Pro 14"', price: 1699, oldprice: 2833, rate: 5 },
  { id: 17, percentsale: 7, productname: 'Magic Keyboard', price: 79, oldprice: 85, rate: 4 },
  { id: 18, percentsale: 45, productname: 'HomePod mini', price: 119, oldprice: 218, rate: 3 },
  { id: 19, percentsale: 35, productname: 'iMac 24"', price: 1399, oldprice: 2154, rate: 2 },
  { id: 20, percentsale: 10, productname: 'Apple Pencil', price: 109, oldprice: 121, rate: 1 },
  { id: 21, percentsale: 20, productname: 'MacBook Air M2', price: 599, oldprice: 749, rate: 5 },
  { id: 22, percentsale: 12, productname: 'iPhone 14', price: 849, oldprice: 965, rate: 4 },
  { id: 23, percentsale: 32, productname: 'iPad Pro', price: 699, oldprice: 1030, rate: 5 },
  { id: 24, percentsale: 25, productname: 'Apple Watch', price: 319, oldprice: 425, rate: 4 },
  { id: 25, percentsale: 15, productname: 'AirPods Pro', price: 219, oldprice: 258, rate: 5 },
  { id: 26, percentsale: 38, productname: 'MacBook Pro 14"', price: 1799, oldprice: 2903, rate: 5 },
  { id: 27, percentsale: 5, productname: 'Magic Keyboard', price: 89, oldprice: 94, rate: 4 },
  { id: 28, percentsale: 50, productname: 'HomePod mini', price: 99, oldprice: 198, rate: 3 },
  { id: 29, percentsale: 40, productname: 'iMac 24"', price: 1299, oldprice: 2165, rate: 2 },
  { id: 30, percentsale: 12, productname: 'Apple Pencil', price: 99, oldprice: 113, rate: 1 },
  { id: 31, percentsale: 25, productname: 'MacBook Air M2', price: 599, oldprice: 799, rate: 5 },
  { id: 32, percentsale: 15, productname: 'iPhone 14', price: 849, oldprice: 999, rate: 4 },
  { id: 33, percentsale: 30, productname: 'iPad Pro', price: 699, oldprice: 999, rate: 5 },
  { id: 34, percentsale: 20, productname: 'Apple Watch', price: 319, oldprice: 399, rate: 4 },
  { id: 35, percentsale: 10, productname: 'AirPods Pro', price: 219, oldprice: 249, rate: 5 },
  { id: 36, percentsale: 35, productname: 'MacBook Pro 14"', price: 1799, oldprice: 2799, rate: 5 },
  { id: 37, percentsale: 5, productname: 'Magic Keyboard', price: 89, oldprice: 94, rate: 4 },
  { id: 38, percentsale: 50, productname: 'HomePod mini', price: 99, oldprice: 199, rate: 3 },
  { id: 39, percentsale: 40, productname: 'iMac 24"', price: 1299, oldprice: 2199, rate: 2 },
  { id: 40, percentsale: 12, productname: 'Apple Pencil', price: 99, oldprice: 113, rate: 1 },
  { id: 41, percentsale: 22, productname: 'MacBook Air M2', price: 649, oldprice: 829, rate: 4 },
  { id: 42, percentsale: 18, productname: 'iPhone 14', price: 899, oldprice: 1099, rate: 5 },
  { id: 43, percentsale: 28, productname: 'iPad Pro', price: 729, oldprice: 1013, rate: 4 },
  { id: 44, percentsale: 15, productname: 'Apple Watch', price: 349, oldprice: 411, rate: 3 },
  { id: 45, percentsale: 8, productname: 'AirPods Pro', price: 229, oldprice: 249, rate: 5 },
  { id: 46, percentsale: 40, productname: 'MacBook Pro 14"', price: 1699, oldprice: 2833, rate: 5 },
  { id: 47, percentsale: 7, productname: 'Magic Keyboard', price: 79, oldprice: 85, rate: 4 },
  { id: 48, percentsale: 45, productname: 'HomePod mini', price: 119, oldprice: 218, rate: 3 },
  { id: 49, percentsale: 35, productname: 'iMac 24"', price: 1399, oldprice: 2154, rate: 2 },
  { id: 50, percentsale: 10, productname: 'Apple Pencil', price: 109, oldprice: 121, rate: 1 }
];



const App = () => {
  const [value, setValue] = useState('');
  const [filtered, setFiltered] = useState(products);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const timerRef = useRef(null);

  const [displayed, setDisplayed] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;

  const cartShown = useCallback(() => {
    setShowCart(prev => !prev);
  }, [])


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


  const inputValue = useCallback((e) => {
    const target = e.target.value;
    setValue(target);
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const result = products.filter(item =>
        item.productname.toLowerCase().includes(target.toLowerCase().trim())
      );
      setFiltered(result);
    }, 300);
  }, [])



  const updateQuantity = useCallback((productId, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );

  }, [])

  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }, [])


  const addToCart = useCallback((product) => {
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
  }, [])


  const loadMore = useCallback(() => {
    const nextPage = page + 1;
    const start = (nextPage - 1) * perPage;
    const end = start + perPage;
    const nextItems = filtered.slice(start, end);

    if (nextItems.length > 0) {
      setDisplayed(prev => [...prev, ...nextItems]);
      setPage(nextPage);
    }
  }, [page, perPage, filtered])



  useEffect(() => {
    setDisplayed(filtered.slice(0, perPage));
    setPage(1);
  }, [filtered]);


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
                {displayed.length > 0 ? displayed.map((item) => (
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

            <LoadMore
              onLoad={loadMore}
              hasMore={displayed.length < filtered.length}
            />

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