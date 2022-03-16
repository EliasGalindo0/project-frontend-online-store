import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

export default class Shoppingcart extends React.Component {
  render() {
    // const { shoppingCartList } = this.state;
    const { productDetailsList } = this.props;
    // console.log(shoppingCartList.map((item) => item));
    // console.log(shoppingCartList);
    // console.log(productDetailsList);
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

// {shoppingCartList.map((item) => (
//   <p
//     data-testid="shopping-cart-product-name"
//     key={ item.id }
//     quantity={ qt }
//   >
//     Nome:
//     {item.title}
//     Quantidade:
//     {qt}
//   </p>
// ))}

Shoppingcart.propTypes = {
  productDetailsList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  cart: PropTypes.number.isRequired,

};
