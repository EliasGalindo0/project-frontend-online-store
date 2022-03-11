import React from 'react';
import * as api from '../services/api';
import ProductCard from './ProductCard';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchProduct: '',
      productsList: [],
      showSearchResults: false,
    };
  }

  // Função que consulta a API e guarda o resultado no estado do componente
  searchForProducts = async () => {
    const { searchProduct } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(false, searchProduct);
    // console.log(products);
    this.setState({
      productsList: products.results,
      showSearchResults: true,
    });
  }

  // Função que atualiza o estado com o valor do input
  onSearchInputChange = (event) => {
    const { value } = event.target;
    this.setState({
      searchProduct: value,
    });
    console.log(value);
  }

  render() {
    const { searchProduct, productsList, showSearchResults } = this.state;
    console.log(productsList);
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <input
          data-testid="query-input"
          type="text"
          name="searchProduct"
          value={ searchProduct }
          onChange={ this.onSearchInputChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.searchForProducts }
        >
          Buscar produto
        </button>

        {showSearchResults
        && productsList.length === 0
        && <h3>Nenhum produto foi encontrado</h3>}

        {productsList
          .map((produto) => (<ProductCard
            data-testid="product"
            key={ produto.id }
            title={ produto.title }
            price={ produto.price }
            thumbnail={ produto.thumbnail }
          />))}
      </div>
    );
  }
}
