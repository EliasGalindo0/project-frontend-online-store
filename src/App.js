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
      title: [],
    };
  }

  addtoCart = (event, title) => {
    this.setState((prevState) => ({
      cart: prevState.cart + 1,
      title: [...prevState.title, title],
    }));
  }

  render() {
    const { title, cart } = this.state;
    // console.log(title);
    // console.log(cart);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route
            path="/shoppingcart"
            render={ () => <Shoppingcart title={ title } cart={ cart } /> }
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
