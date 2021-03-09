export async function getCategories() {
  const endPointCategories = 'https://api.mercadolibre.com/sites/MLB/categories';
  const resultFetch = await fetch(endPointCategories);
  const resultJson = await resultFetch.json();
  return resultJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPointForTerm = ` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  const fetchResul = await fetch(endPointForTerm);
  const jsonResult = await fetchResul.json();
  return jsonResult;
}
