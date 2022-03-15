import React from 'react';
// import { Link } from 'react-router-dom';
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

//   handleDecrease = ({ target }) => {
//     const { quantity } = this.state;
//     const { name } = target;
//     const elem = shoppingCartList.find((item) => item.id === name);
//     console.log(elem);
//     if (elem.quantity > 0) {
//       elem.quantity -= 1;
//     } else {
//       elem.quantity = 0;
//     }
//     this.setState( );
//   }

//  handleIncrease = ({ target }) => {
//    const { shoppingCartList } = this.state;
//    const { name } = target;
//    const elem = shoppingCartList.find((item) => item.id === name);
//    if (elem.quantity < elem.quantityDisponivel) {
//      elem.quantity += 1;
//    }
//    this.setState({ shoppingCartList: [...shoppingCartList] });

  render() {
    const { shoppingCartList, qt } = this.state;
    // console.log(shoppingCartList.map((item) => item));
    // console.log(shoppingCartList);
    return (

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
              <button
                name={ item.id }
                type="button"
                // onClick={ handleIncrease }
                data-testid="product-increase-quantity"
              >
                +
              </button>
              <button
                name={ item.id }
                type="button"
                // onClick={ handleDecrease }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <button
                name={ item.id }
                type="button"
                // onClick={ handleRemove }
              >
                X
              </button>
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
