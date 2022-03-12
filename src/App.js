import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Shoppingcart from './components/Shoppingcart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/:id" render={ (props) => <ProductDetails { ...props } /> } />
        <Route path="/shoppingcart" component={ Shoppingcart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
