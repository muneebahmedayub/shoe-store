import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//IMPORT COMPONENTS
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/contact'component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/shoppingCart' component={ShoppingCart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
