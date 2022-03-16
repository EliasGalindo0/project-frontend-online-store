import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Shoppingcart from './components/Shoppingcart';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: 0,
      productDetailsList: [],
    };
  }

  addtoCart = (event, titleAndId) => {
    const { productDetailsList } = this.state;
    const elem = productDetailsList.some((item) => titleAndId.id === item.id);
    if (!elem) {
      this.setState((prevState) => ({
        cart: 1,
        productDetailsList: [...prevState.productDetailsList, titleAndId],
      }));
    }
  }

  render() {
    const { cart, productDetailsList } = this.state;
    // console.log(cart);
    // console.log(cart);
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Home addtoCart={ this.addtoCart } />) }
          />
          <Route
            path="/shoppingcart"
            render={ () => (<Shoppingcart
              productDetailsList={ productDetailsList }
              cart={ cart }
            />) }
          />
          <Route
            path="/:id"
            render={
              (props) => (<ProductDetails
                { ...props }
                addtoCart={ this.addtoCart }
              />)
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
