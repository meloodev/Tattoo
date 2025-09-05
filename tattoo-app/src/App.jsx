import SignIn from "@comp/SignIn/SignIn";
import Registration from '@comp/Registration/Registration';
import Recovery from '@comp/Recovery/Recovery';
import PageNotFound from "@comp/PageNotFound/PageNotFound";
import CardItem from "@comp/CardItem/CardItem";
import MessageBox from "@comp/MessageBox/MessageBox";
import Modal from "@comp/ModalMessage/ModalMessage";
import CustomFilter from "@comp/CustomFilter/CustomFilter";
import HeaderControls from "@comp/HeaderControls/HeaderControls";



import './App.css';
const App = () => {
  return (
    <>
      <header>
        <div className="container">
          <HeaderControls />
          <div className="header__filter">
            <CustomFilter />
          </div>
        </div>
      </header>

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