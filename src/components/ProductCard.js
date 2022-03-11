import React from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends React.Component {
  render() {
    const { title,
      price,
      thumbnail } = this.props;

    return (
      <div data-testid="product" className="product-card-container">
        <img src={ thumbnail } alt={ title } />
        <p>{title}</p>
        <p>{price}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
