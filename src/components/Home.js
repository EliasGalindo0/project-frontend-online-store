import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ category: categories });
    });
  }

  render() {
    const { category } = this.state;
    return (
      <div>
        <input type="text" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        {category.map((item) => (
          <label htmlFor={ item.id } data-testid="category" key={ item.id }>
            <input id={ item.id } type="radio" value={ item.name } name="category" />
            {item.name}
          </label>
        ))}
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          <button type="button">
            carrinho
          </button>
        </Link>
      </div>
    );
  }
}
