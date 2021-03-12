export async function getCategories() {
  // Implemente aqui
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endPoint);
  const categories = await response.json();
  return categories;
  // return fetch(endPoint).then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(endPoint);
  const products = await response.json();
  // console.log(products);
  return products;
}
