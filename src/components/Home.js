import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link
          to="/shopingCart"
          data-testid="shopping-cart-button"
        >
          <button type="button">
            carrinho
          </button>
        </Link>
      </div>
    );
  }
}
