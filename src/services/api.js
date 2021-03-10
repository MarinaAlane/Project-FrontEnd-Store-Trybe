export async function getCategories() {
  const allCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestAllCategories = allCategories.json();
  return requestAllCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  try {
    const categoryQuery = await fetch(endpoint);
    const requestCategoryQuery = await categoryQuery.json();
    return requestCategoryQuery;
  } catch (error) {
    console.log(error);
  }
}
