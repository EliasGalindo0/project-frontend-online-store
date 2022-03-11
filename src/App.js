import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Shoppingcart from './components/Shoppingcart';

function App() {
  // api.getCategories().then((categories) => { console.log(categories); });
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shoppingcart" component={ Shoppingcart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
