import './App.css';
import HeadBanner from "./components/HeadBanner";
import LoginPage from './components/Login/Login';
import Home from './components/Home';
import NavBar from './components/Nav';
import Basketfooter from './components/Basketfooter';
import Basket from './components/Basket/Basket';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function App() {

  const [apiTest, setApiTest] = useState([]);

  function callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => setApiTest({ apiResponse: res }));
};

useEffect(() => {
  fetch("http://localhost:9000/testAPI")
  .then(res => { res.text()
    .then(res => { setApiTest({ apiResponse: res });
          console.log(apiTest)
      });
  })
}, []) // Dependency array

  return (  
    <div className="app">
      <header className="login-banner">
        <span className="headertitle">CONTACT US &nbsp;<img className="contactUsIcon" src="https://cdn-icons-png.flaticon.com/512/25/25453.png" alt="phone-us" />&nbsp;(+44) 01592 215632</span>
        <span className="headertitle">EMAIL &nbsp;<img className="contactUsIcon" src="https://cdn-icons.flaticon.com/png/512/2099/premium/2099199.png?token=exp=1642104422~hmac=f44bd6cbb5df0cef80b07ac3ef7295b6" alt="email-us" />&nbsp;SHOP@BARDSTORE.CO.UK</span>
        <span className="loginlink"><a href="/login">CREATE AN ACCOUNT/SIGN IN</a></span>
      </header>

      <a href="/"><HeadBanner /></a>
      <NavBar />
          <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/basket" element={<Basket />} />
            </Routes>
          </Router>
      <Basketfooter />
      </div>
  );
}


export default App;
