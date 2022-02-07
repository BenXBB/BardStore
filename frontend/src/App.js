import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Loginbanner from './components/Loginbanner';
import HeadBanner from "./components/HeadBanner";
import LoginPage from './components/Login/Login';
import Home from './components/Home';
import Product from "./components/Product";
import NavBar from './components/Nav';
import Basketfooter from './components/Basketfooter';
import Basket from './components/Basket/Basket';


function App() {
  
  return (  
    <div className="app">
      <Loginbanner />
      <a href="/"><HeadBanner /></a>
      <NavBar />
          <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/auth/login" element={<LoginPage />} />
                <Route path="/basket" element={<Basket />} />
            </Routes>
          </Router>
      <Basketfooter />
      </div>
  );
}


export default App;
