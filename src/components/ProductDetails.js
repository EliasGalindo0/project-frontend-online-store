import React from 'react';
import Shoppingcart from './Shoppingcart';
import { Link } from 'react-router-dom';

export default class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      productDetails: [],
      detailsLoaded: false,
      cart: '',
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

  // função atualiza o estado title
  // addToCart = ({ target }) => {
  //   // console.log(target);
  //   const estado = this.state;
  //   const { title } = estado.productDetails;
  //   // console.log(title);
  //   this.setState({ cart: title });
  // }

  render(props) {
    // console.log(props); // recebe undefined pq?
    const estado = this.state;
    const { title, thumbnail, price, attributes } = estado.productDetails;
    const { detailsLoaded, cart } = this.state;
    const { addtoCart } = this.props;
    // console.log(addtoCart);
    // console.log(cart);
    // console.log(detailsLoaded);
    return (
      <div>
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
                onClick={ (event) => { addtoCart(event, title); } }
              >
                Add to cart
              </button>
            </div>)}
        <Link to={"/shoppingcart"}>Shopping Cart</Link>
      </div>
    );
  }
}
