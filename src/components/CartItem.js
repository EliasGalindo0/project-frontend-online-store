import React from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  handleDecrease = () => {
    const { quantity } = this.state;
    if (quantity <= 0) {
      this.setState({
        quantity: 0,
      });
    } else {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }
  }

  handleIncrease = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  }

  render() {
    const { item: { id, title } } = this.props;
    const { quantity } = this.state;
    // console.log(this.props);
    // console.log(item);
    return (
      <div key={ id }>
        <p
          data-testid="shopping-cart-product-name"
        >
          {title}
        </p>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          {quantity}
        </p>
        <button
          name={ id }
          type="button"
          onClick={ this.handleIncrease }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          name={ id }
          type="button"
          onClick={ this.handleDecrease }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          name={ id }
          type="button"
          // onClick={ handleRemove }
        >
          X
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  // title: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  // thumbnail: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
};
