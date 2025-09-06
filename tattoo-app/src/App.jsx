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
import LoadMoreBtn from "@comp/LoadMoreBtn/LoadMoreBtn";
import './App.css';


const products = [
  // iPhone
  { id: 1, productname: 'iPhone 14 Pro', price: 999, oldprice: 1199, percentsale: 20, rate: 5 },
  { id: 2, productname: 'iPhone 14', price: 849, oldprice: 999, percentsale: 15, rate: 4 },
  { id: 3, productname: 'iPhone 13 Pro', price: 799, oldprice: 999, percentsale: 20, rate: 5 },
  { id: 4, productname: 'iPhone 13', price: 699, oldprice: 899, percentsale: 15, rate: 4 },
  { id: 5, productname: 'iPhone 12 Pro', price: 749, oldprice: 949, percentsale: 20, rate: 4 },
  { id: 6, productname: 'iPhone 12', price: 649, oldprice: 849, percentsale: 15, rate: 5 },
  { id: 7, productname: 'iPhone SE', price: 499, oldprice: 599, percentsale: 15, rate: 4 },
  { id: 8, productname: 'iPhone 11', price: 599, oldprice: 699, percentsale: 15, rate: 4 },
  { id: 9, productname: 'iPhone XR', price: 499, oldprice: 599, percentsale: 10, rate: 4 },
  { id: 10, productname: 'iPhone XS', price: 449, oldprice: 549, percentsale: 15, rate: 4 },

  // Samsung
  { id: 11, productname: 'Samsung Galaxy S23', price: 899, oldprice: 1099, percentsale: 18, rate: 5 },
  { id: 12, productname: 'Samsung Galaxy S22', price: 799, oldprice: 999, percentsale: 20, rate: 4 },
  { id: 13, productname: 'Samsung Galaxy S21', price: 699, oldprice: 899, percentsale: 22, rate: 4 },
  { id: 14, productname: 'Samsung Galaxy S20', price: 599, oldprice: 799, percentsale: 20, rate: 4 },
  { id: 15, productname: 'Samsung Galaxy Note 20', price: 949, oldprice: 1149, percentsale: 18, rate: 5 },
  { id: 16, productname: 'Samsung Galaxy Note 10', price: 849, oldprice: 1049, percentsale: 15, rate: 4 },
  { id: 17, productname: 'Samsung Galaxy A53', price: 399, oldprice: 499, percentsale: 20, rate: 4 },
  { id: 18, productname: 'Samsung Galaxy A33', price: 349, oldprice: 449, percentsale: 22, rate: 3 },
  { id: 19, productname: 'Samsung Galaxy Z Fold 4', price: 1799, oldprice: 1999, percentsale: 10, rate: 5 },
  { id: 20, productname: 'Samsung Galaxy Z Flip 4', price: 1299, oldprice: 1499, percentsale: 15, rate: 5 },

  // MacBook
  { id: 21, productname: 'MacBook Air M2', price: 1199, oldprice: 1399, percentsale: 15, rate: 5 },
  { id: 22, productname: 'MacBook Air M1', price: 999, oldprice: 1199, percentsale: 17, rate: 4 },
  { id: 23, productname: 'MacBook Pro 14"', price: 1999, oldprice: 2399, percentsale: 20, rate: 5 },
  { id: 24, productname: 'MacBook Pro 16"', price: 2499, oldprice: 2899, percentsale: 18, rate: 5 },
  { id: 25, productname: 'MacBook Pro M1', price: 1299, oldprice: 1499, percentsale: 15, rate: 4 },
  { id: 26, productname: 'MacBook Air 2020', price: 899, oldprice: 1099, percentsale: 20, rate: 4 },
  { id: 27, productname: 'MacBook Pro 2019', price: 1399, oldprice: 1599, percentsale: 15, rate: 4 },
  { id: 28, productname: 'MacBook Air 2019', price: 799, oldprice: 999, percentsale: 15, rate: 3 },
  { id: 29, productname: 'MacBook Pro 2018', price: 1199, oldprice: 1399, percentsale: 18, rate: 4 },
  { id: 30, productname: 'MacBook Air 2018', price: 699, oldprice: 899, percentsale: 15, rate: 4 },

  // iPad
  { id: 31, productname: 'iPad Pro 12.9"', price: 1099, oldprice: 1299, percentsale: 15, rate: 5 },
  { id: 32, productname: 'iPad Pro 11"', price: 899, oldprice: 1099, percentsale: 15, rate: 5 },
  { id: 33, productname: 'iPad Air', price: 599, oldprice: 749, percentsale: 20, rate: 4 },
  { id: 34, productname: 'iPad 10"', price: 499, oldprice: 599, percentsale: 15, rate: 4 },
  { id: 35, productname: 'iPad 9"', price: 399, oldprice: 499, percentsale: 18, rate: 4 },
  { id: 36, productname: 'iPad Mini', price: 349, oldprice: 449, percentsale: 20, rate: 4 },
  { id: 37, productname: 'iPad Pro 2021', price: 999, oldprice: 1199, percentsale: 15, rate: 5 },
  { id: 38, productname: 'iPad Air 2022', price: 699, oldprice: 849, percentsale: 15, rate: 4 },
  { id: 39, productname: 'iPad 2020', price: 499, oldprice: 599, percentsale: 20, rate: 4 },
  { id: 40, productname: 'iPad Mini 2021', price: 399, oldprice: 499, percentsale: 18, rate: 4 },

  // Apple Watch 
  { id: 41, productname: 'Apple Watch Series 8', price: 399, oldprice: 499, percentsale: 20, rate: 5 },
  { id: 42, productname: 'Apple Watch SE', price: 249, oldprice: 299, percentsale: 15, rate: 4 },
  { id: 43, productname: 'Apple Watch Series 7', price: 349, oldprice: 449, percentsale: 18, rate: 4 },
  { id: 44, productname: 'Apple Watch Series 6', price: 299, oldprice: 399, percentsale: 20, rate: 4 },
  { id: 45, productname: 'Apple Watch Nike', price: 349, oldprice: 449, percentsale: 15, rate: 4 },
  { id: 46, productname: 'Apple Watch Hermès', price: 799, oldprice: 999, percentsale: 20, rate: 5 },
  { id: 47, productname: 'Apple Watch SE 2', price: 259, oldprice: 309, percentsale: 15, rate: 4 },
  { id: 48, productname: 'Apple Watch Ultra', price: 799, oldprice: 999, percentsale: 25, rate: 5 },
  { id: 49, productname: 'Apple Watch Series 5', price: 299, oldprice: 399, percentsale: 15, rate: 4 },
  { id: 50, productname: 'Apple Watch Series 4', price: 249, oldprice: 349, percentsale: 15, rate: 4 },

  // AirPods 
  { id: 51, productname: 'AirPods Pro 2', price: 249, oldprice: 299, percentsale: 15, rate: 5 },
  { id: 52, productname: 'AirPods Pro 1', price: 199, oldprice: 249, percentsale: 20, rate: 4 },
  { id: 53, productname: 'AirPods 3rd Gen', price: 179, oldprice: 219, percentsale: 18, rate: 4 },
  { id: 54, productname: 'AirPods 2nd Gen', price: 129, oldprice: 159, percentsale: 15, rate: 4 },
  { id: 55, productname: 'AirPods Max', price: 549, oldprice: 599, percentsale: 10, rate: 5 },
  { id: 56, productname: 'AirPods Lite', price: 99, oldprice: 129, percentsale: 15, rate: 3 },
  { id: 57, productname: 'AirPods Mini', price: 149, oldprice: 179, percentsale: 15, rate: 4 },
  { id: 58, productname: 'AirPods Sport', price: 199, oldprice: 229, percentsale: 10, rate: 4 },
  { id: 59, productname: 'AirPods Studio', price: 299, oldprice: 349, percentsale: 15, rate: 5 },
  { id: 60, productname: 'AirPods Everyday', price: 179, oldprice: 209, percentsale: 12, rate: 4 }
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

  const customSearch = useCallback((filt) => {
    const res = products.filter(item =>
      item.productname.toLowerCase().includes(filt.toLowerCase().trim())
    );
    setFiltered(res);
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
              <CustomFilter customSearch={customSearch} />
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

            <LoadMoreBtn
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