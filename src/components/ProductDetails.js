import React from 'react';

export default class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      productDetails: [],
      detailsLoaded: false,
    };
  }

  // Coloquei o componentDidMount como async pra ele poder esperar pela requisição da API
  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    const detailsObject = await this.getProductDetails(id);
    console.log(detailsObject);
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
    const { title, thumbnail, price, attributes } = this.state.productDetails;
    const { detailsLoaded } = this.state;
    console.log(attributes);
    console.log(detailsLoaded);
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
            <ul>
              {attributes.map((attribute) => (
                <li key={ attribute.name }>
                  {attribute.name}
                  :
                  {attribute.value_name}
                </li>))}
            </ul>)}
      </div>
    );
  }
}
