import React from 'react';
import PropTypes from 'prop-types';

export default class Shoppingcart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingCartList: [],
      qt: 0,
    };
  }

  componentDidMount() {
    const { productDetailsList, cart } = this.props;
    this.setState({
      shoppingCartList: productDetailsList,
      qt: cart,
    });
  }

  render() {
    const { shoppingCartList, qt } = this.state;
    // console.log(shoppingCartList.map((item) => item));
    return (
      // colocar um length array se for 0 mostrar texto vazio
      <div>
        <div>
          {shoppingCartList.map((item) => (
            <div key={ item.id }>
              <p
                data-testid="shopping-cart-product-name"
                quantity={ qt }
              >
                Nome:
                {item.title}
              </p>
              <p data-testid="shopping-cart-product-quantity">
                Quantidade:
                {qt}
              </p>
            </div>
          ))}
        </div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
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
