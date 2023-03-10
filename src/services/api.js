export async function getCategories() {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    if (categoryId) {
      const responseCategory = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
      const data = await responseCategory.json();
      return data;
    }
    const responseQuerry = await fetch(` https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await responseQuerry.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getProductDetails(id) {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await response.json();
  return data;
}
