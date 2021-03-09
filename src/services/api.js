const baseURL = 'https://api.mercadolibre.com/sites/MLB/'

export async function getCategories() {
  const result = await fetch(`${baseURL}categories`);
  return result.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const key = categoryId || query;
  if (key === categoryId) {
    const result = await fetch(`${baseURL}search?category=${categoryId}`);
    return result.json();
  } else if (key === query) {
    const result = await fetch(`${baseURL}search?q=${categoryId}`);
    return result.json();
  }
}
