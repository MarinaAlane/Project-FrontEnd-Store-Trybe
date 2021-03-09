export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const endpointRequest = await fetch(endpoint);
  const endpointResponse = await endpointRequest.json();
  return endpointResponse;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebeY
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}&q=$${query}`;
  const endpointRequest = await fetch(endpoint);
  const endpointResponse = await endpointRequest.json();
  return endpointResponse;
}
