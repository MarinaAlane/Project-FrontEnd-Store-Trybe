export async function getCategories() {
  // Implemente aqui
  const requestReturn = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestObj = await requestReturn.json();
  return requestObj;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const requestReturn = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const requestObj = await requestReturn.json();
  return requestObj;
}
