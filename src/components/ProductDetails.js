import React from 'react';
import Shoppingcart from './Shoppingcart';
import { Link } from 'react-router-dom';

export default class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      productDetails: [],
      detailsLoaded: false,
      cart2: 0,
      cart: 0,
    };
  }

  // Coloquei o componentDidMount como async pra ele poder esperar pela requisição da API
  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    // console.log(id);
    const detailsObject = await this.getProductDetails(id);
    // console.log(detailsObject);
    this.setState({
      productDetails: detailsObject,
      detailsLoaded: true,
    });
  }

  // Essa função faz a requisição pros detalhes do produto. Deixei aqui pra ficar mais claro o processo, depois podemos colocar ela em api.js
  getProductDetails = async (id) => {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await response.json();
    return data;
  }

  render() {
    const estado = this.state;
    const { title, thumbnail, price, attributes } = estado.productDetails;
    const { detailsLoaded, cart2, productDetails } = this.state;
    // console.log(productDetails);
    const { addtoCart } = this.props;
    return (
      <div>
        <Link
          to="/shoppingcart"
        >
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            carrinho
          </button>
        </Link>
        <h4 data-testid="product-detail-name">{title}</h4>
        <img src={ thumbnail } alt={ title } />
        <p>
          Preço:$
          {price}
        </p>
        Especificações técnicas:
        {detailsLoaded
          && (
            <div>
              <ul>
                {attributes.map((attribute) => (
                  <li key={ attribute.name }>
                    {attribute.name}
                    :
                    {attribute.value_name}
                  </li>))}
              </ul>
              <button
                type="button"
                data-testid="product-detail-add-to-cart"
                onClick={ (event) => { addtoCart(event, productDetails, cart2); } }
              >
                Add to cart
              </button>
            </div>)}
      </div>
    );
  }
}
