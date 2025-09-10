import { useState, useRef, useEffect, useCallback } from "react";
import products from './db/products';
import SignIn from "@comp/SignIn/SignIn";
// import Registration from '@comp/Registration/Registration';
import Recovery from '@comp/Recovery/Recovery';
// import PageNotFound from "@comp/PageNotFound/PageNotFound";
import CardItem from "@comp/CardItem/CardItem";
import MessageBox from "@comp/MessageBox/MessageBox";
import Modal from "@comp/ModalMessage/ModalMessage";
import CustomFilter from "@comp/CustomFilter/CustomFilter";
import HeaderControls from "@comp/HeaderControls/HeaderControls";
import CardNotFound from "@comp/CardNotFound/CardNotFound";

import Cart from "@comp/Cart/Cart";
import LoadMoreBtn from "@comp/LoadMoreBtn/LoadMoreBtn";
import AppRoutes from "./Routes/AppRoutes";


import './App.css';




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

  useEffect(() => {
    if (showCart) {
      document.body.classList.add('lock');
    }

    return () => {
      document.body.classList.remove('lock');
    }
  }, [showCart])


  const menuCartRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (!menuCartRef.current) return;

      const clickedOutside = !menuCartRef.current.contains(e.target);
      const clickedBtn = e.target.closest('.card__btn');
      const clickedClose = e.target.closest('.cart__close');

      if ((clickedOutside && !clickedBtn) || clickedClose) {
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

  const [loadingStates, setLoadingStates] = useState({});

  const addToCart = useCallback((product) => {
    setLoadingStates((prev) => ({ ...prev, [product.id]: true }))
    setCart(prevCart => {
      let found = false;
      const newCart = prevCart.map(item => {
        if (item.id === product.id) {
          found = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      const result = found ? newCart : [...prevCart, { ...product, quantity: 1 }];
      setTimeout(() => {
        setLoadingStates((prev) => ({ ...prev, [product.id]: false }))
      }, 500);

      return result;
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
              <AppRoutes
                displayed={displayed}
                addToCart={addToCart}
                 items={cart}
                loadingStates={loadingStates}
                loadMore={loadMore}
                filtered={filtered}
              />


              {/* <ul className="products__items">
                {displayed.length > 0 ? displayed.map((item) => (
                  <CardItem
                    key={item.id}
                    product={item}
                    addToCart={addToCart}
                    isLoading={loadingStates[item.id] || false}
                  />
                )) : <CardNotFound />}
              </ul> */}


            </div>

            <aside className="cart__aside" ref={menuCartRef}>
              {showCart && <Cart
                items={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />}
            </aside>

            {/* <LoadMoreBtn
              onLoad={loadMore}
              hasMore={displayed.length < filtered.length}
            /> */}

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