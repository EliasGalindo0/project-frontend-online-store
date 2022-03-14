import React from 'react';

export default class Shoppingcart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingCartList: [],
      qt: '',
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
    console.log(shoppingCartList);
    return (
      <div>
        <p data-testid="shopping-cart-product-name">
          Nome:
          {/* { shoppingCartList } */}
        </p>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          { qt }
        </p>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>

    );
  }
}
