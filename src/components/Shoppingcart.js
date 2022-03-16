import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

export default class Shoppingcart extends React.Component {
  render() {
    const { productDetailsList } = this.props;

    return (

      <div>
        { productDetailsList.length === 0 ? (
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        ) : (
          <div>
            {productDetailsList.map((item) => (
              <CartItem key={ item.id } item={ item } />
            ))}
          </div>)}
      </div>
    );
  }
}

Shoppingcart.propTypes = {
  productDetailsList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
