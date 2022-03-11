import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import * as api from './services/api';
import Home from './components/Home';
import ShopingCart from './components/ShopingCart';

function App() {
  api.getCategories().then((categories) => { console.log(categories); });
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shopingcart" component={ ShopingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
