// import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// export default class Shoppingcart extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       itensAddedInCart: [],
//     };
//   }

//   componentDidMount = () => {
//     this.generateList();
//   }

//   generateList = () => {
//     const { itensReceived } = this.props;
//     this.setState({ itensAddedInCart: [...itensReceive] });
//   }

//   handleDecrease = ({ target }) => {
//     const { itensAddedInCart } = this.state;
//     const { name } = target;
//     const elem = itensAddedInCart.find((item) => item.id === name);
//     if (elem.quantity > 0) {
//       elem.quantity -= 1;
//     } else {
//       elem.quantity = 0;
//     }
//     this.setState({ itensAddedInCart: [...itensAddedInCart] });
//   }

//  handleIncrease = ({ target }) => {
//    const { itensAddedInCart } = this.state;
//    const { name } = target;
//    const elem = itensAddedInCart.find((item) => item.id === name);
//    if (elem.quantity < elem.quantityDisponivel) {
//      elem.quantity += 1;
//    }
//    this.setState({ itensAddedInCart: [...itensAddedInCart] });
//    // const Total = () => {
//    //   const totalItemCount = items.reduce((total, item) => {
//    //     return total + item.quantity;
//    //   }, 0);
//    //   setTotalItemCount(totalItemCount);
//    // };
//  }

//  render() {
//    const { handleDecrease, handleIncrease } = this;
//    return (
//      <div>
//        { itensAddedInCart.length === 0 ? (
//          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
//        ) : (
//          <div>
//            <ul>
//              {
//                itensAddedInCart.map((item) => (
//                  <div key={ item.title }>
//                    <p>{ item.quantity }</p>
//                    <button
//                      name={ item.id }
//                      type="button"
//                      onClick={ handleIncrease }
//                      data-testid="product-increase-quantity"
//                    >
//                      +
//                    </button>
//                    <button
//                      name={ item.id }
//                      type="button"
//                      onClick={ handleDecrease }
//                      data-testid="product-decrease-quantity"
//                    >
//                      -
//                    </button>
//                  </div>
//                ))
//              }
//            </ul>
//            <div>
//              <Link
//                to="/finalizar"
//              >
//                <button
//                  type="button"
//                >
//                  Finalizar a Compra
//                </button>
//              </Link>
//            </div>
//          </div>
//        )}
//      </div>
//    );
//  }
// }
// Shoppingcart.propTypes = {
//   itensReceived: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
// // /* // lista de produtos com:
// // // valor total
// // // botão +
// // // botão -
// // // quantidade ñ pode negativar
// // // botão de remover
// // // botão de finalizar */

// addtoCart = (detailsObject) => {
//   const { productDetailsList } = this.state;
//   const elem = productDetailsList.some((item) => detailsObject.id === item.id);
//   // console.log(elem);
//   if (elem === false) {
//     this.setState((prevState) => ({
//       cart: prevState.cart + 1,
//       productDetailsList: [...prevState.productDetailsList, detailsObject],
//     }));
//   } else {
//     this.setState((prevState) => ({
//       cart: prevState.cart + 1,
//     }));
//   }
// }
