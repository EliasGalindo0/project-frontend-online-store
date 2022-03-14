import React from 'react';

export default class Shoppingcart extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      qt: '',
    };
  }

  componentDidMount() {
    const { title, cart } = this.props;
    // console.log('props:', title, cart);
    this.setState({
      name: title,
      qt: cart,
    });
  }

  render() {
    // console.log('rodou');
    // console.log(props);
    const { name, qt } = this.state;
    // console.log(name, qt);
    return (
      <div>
        <p data-testid="shopping-cart-product-name">Nome: { name }</p>
        <p data-testid="shopping-cart-product-quantity">Quantidade: { qt }</p>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}
