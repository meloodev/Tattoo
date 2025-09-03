import SignIn from "./components/SignIn/SignIn";
import Registration from './components/Registration/Registration';
import Recovery from './components/Recovery/Recovery';
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CardItem from "./components/CardItem/CardItem";
import MessageBox from "./components/MessageBox/MessageBox";
import Modal from "./components/ModalMessage/ModalMessage";

import './App.css';
const App = () => {
  return (
    <>
     <div className="container">
      <Modal/>
      {/* <MessageBox/> */}
       {/* <SignIn /> */}
      {/* <Registration /> */}
      {/* <Recovery /> */}
      {/* <PageNotFound /> */}
      {/* <CardItem /> */}
     </div>
    </>
  )
}

export default App;