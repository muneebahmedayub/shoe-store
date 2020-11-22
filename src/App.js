import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//IMPORT COMPONENTS
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Product from './components/Product';
import ProductIndex from './components/ProductIndex';
import NotFound from './components/NotFound';

function App() {
  const shoes = {
    "air-jordan-3-valor-blue": {
        name: "VALOUR BLUE",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
        name: "JORDAN MARS 270 LONDON",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
        name: "RACER BLUE",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    }
};
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />}>
            <Route path='/' element={<ProductIndex shoes={shoes} />} />
            <Route path=':id' element={<Product shoes={shoes} />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
