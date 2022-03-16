import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      // cart: 0,
      titleAndId: {},
    };
  }

  componentDidMount() {
    const { id, title } = this.props;
    // const { id } = this.props;
    // // console.log(id);
    // const detailsObject = await getProductDetails(id);
    // console.log(detailsObject);
    this.setState({
      // productDetails: detailsObject,
      titleAndId: {
        id,
        title,
      },
    });
  }

  render() {
    const { title,
      price,
      thumbnail,
      id,
      addtoCart } = this.props;

    const { titleAndId } = this.state;
    // console.log(addtoCart);
    return (
      <div data-testid="product" className="product-card-container">
        <Link to={ `./${id}` }>
          <img data-testid="product-detail-link" src={ thumbnail } alt={ title } />
        </Link>
        <p>{title}</p>
        <p>{price}</p>
        <button
          // value={ produto.title } // botão que adiciona item no carrinho
          data-testid="product-add-to-cart"
          type="button"
          onClick={ (event) => { addtoCart(event, titleAndId); } }
        >
          Adicionar no carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  addtoCart: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
