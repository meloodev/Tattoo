import SignIn from "./components/SignIn/SignIn";
import Registration from './components/Registration/Registration';
import Recovery from './components/Recovery/Recovery';
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CardItem from "./components/CardItem/CardItem";

import './App.css';
const App = () => {
  return (
    <>
     <div className="container">
       <SignIn />
      <Registration />
      <Recovery />
      {/* <PageNotFound /> */}
      <CardItem />
     </div>
    </>
  )
}

export default App;