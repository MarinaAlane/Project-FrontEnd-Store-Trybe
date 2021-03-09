export async function getCategories() {
  // Implemente aqui
  const endPointCategories = 'https://api.mercadolibre.com/sites/MLB/categories';
  const resultFecht = await fetch(endPointCategories);
  const resultJson = await resultFecht.json();
  return resultJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const endPointForTerm = ` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  const fetchResul = await fetch(endPointForTerm);
  const jsonResult = await fetchResul.json();
  return jsonResult;
}
