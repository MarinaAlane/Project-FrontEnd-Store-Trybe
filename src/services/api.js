export async function getCategories() {
  const allCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestAllCategories = allCategories.json();
  return requestAllCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const categoryQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const requestCategoryQuery = categoryQuery.json();
  return requestCategoryQuery;
}
