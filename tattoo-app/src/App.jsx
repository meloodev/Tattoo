import SignIn from "./components/SignIn/SignIn";
import Registration from './components/Registration/Registration';
import Recovery from './components/Recovery/Recovery';
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CardItem from "./components/CardItem/CardItem";
import MessageBox from "./components/MessageBox/MessageBox";
import Modal from "./components/ModalMessage/ModalMessage";
import Search from "./components/Search/Search";
import CustomFilter from "./components/CustomFilter/CustomFilter";

import './App.css';
const App = () => {
  return (
    <>


      <main>
        <section className="products">
          <div className="container">
            <ul className="products__items">
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
            </ul>
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