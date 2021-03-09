export async function getCategories() {
  // Implemente aqui
  try {
    const endpoint = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const promise = await endpoint.json();
    return promise;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe

}
