import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductCard from './ProductCard';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchProduct: '',
      productsList: [],
      showSearchResults: false,
      category: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ category: categories });
    });
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
    // console.log(value);
  }

  filterProductsCategory = ({ target }) => {
    this.filterProductsById(target);
  }

  async filterProductsById(target) {
    // const { productsList } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(target.value);
    // console.log(products.results);
    this.setState({ productsList: products.results });
    // then(this.setState({ productsList: products.results }));
  }

  render() {
    const {
      searchProduct,
      productsList,
      showSearchResults,
      category,
    } = this.state;
    const { addtoCart } = this.props;
    // console.log(addtoCart);
    // console.log(productsList);
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
        <input type="text" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        {category.map((item) => (
          <label htmlFor={ item.id } data-testid="category" key={ item.id }>
            <input
              id={ item.id }
              type="radio"
              onChange={ this.filterProductsCategory }
              value={ item.id }
              name="category"
            />
            {item.name}
          </label>
        ))}
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
            id={ produto.id }
            title={ produto.title }
            price={ produto.price }
            thumbnail={ produto.thumbnail }
            addtoCart={ addtoCart }
          />))}
      </div>
    );
  }
}
