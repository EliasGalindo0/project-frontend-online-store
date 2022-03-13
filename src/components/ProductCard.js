import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends React.Component {
  render() {
    const { title,
      price,
      thumbnail,
      id } = this.props;

    return (
      <div data-testid="product" className="product-card-container">
        <Link to={ `./${id}` }>
          <img data-testid="product-detail-link" src={ thumbnail } alt={ title } />
        </Link>
        <p>{title}</p>
        <p>{price}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
