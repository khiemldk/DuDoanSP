import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Cate from './Cate/Cate';
import Product from './Product/Product';
import SortFilter from './SortFilter/SortFilter';
import DetailProduct from './DetailProduct/DetailProduct';
import Login from './Login/Login';
import Register from './Register/Register';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams, useHistory
} from "react-router-dom";
import routes from './routes'

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false)
  const [check, setCheck] = useState(false)
  const history = useHistory();

  const handleCheck = () => {
    setCheck(!check);
  }

  const handleLogin = (value) => {

    if (value) {
      setShowLogin(false);
    }
    else {
      setShowLogin(true);
      setShowRegister(false);

    }

  }
  const handleRegister = (value) => {
    if (value) {
      setShowRegister(false);
    } else {
      setShowRegister(true);
      setShowLogin(false);

    }

  }

  return (
    <>
      <div className="main">

        <Header handleLogin={handleLogin} showLogin={showLogin} handleRegister={handleRegister} handleCheck={handleCheck} />

        <div className="container">
          <div className="grid ">
            <div className="grid__row container__padding">
              <div className="grid__col-2">
                <Cate />
              </div>
              <div className="grid__col-10">
                <SortFilter />
                <Switch>
                  {
                    routes.map((route, index) => {
                      return <Route key={index} {...route} id={localStorage.getItem("id")} />
                    })
                  }
                </Switch>
                {/* <Product list={productData} /> */}
                {/* {!productData &&
                <DetailProduct item={productData[0]} />
              } */}
              </div>
            </div>


          </div>
          <Footer />
        </div>
      </div>
      <div className={`modal ${showLogin || showRegister ? "d-flex" : ""}`} >
        <div className="modal__overlay">

        </div>
        <div className="modal__content">
          <div className="modal__inner">
            {showLogin && <Login handleLogin={handleLogin} handleRegister={handleRegister} />}
            {showRegister && <Register handleRegister={handleRegister} handleLogin={handleLogin} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
