const baseURL = 'https://api.mercadolibre.com/sites/MLB/';

export async function getCategories() {
  const result = await fetch(`${baseURL}categories`);
  return result.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let result = await (await fetch(`${baseURL}search?category=${categoryId}`)).json();
  if ( result.results.length === 0 ) {
    result = await (await fetch(`${baseURL}search?q=${query}`)).json();
  }
  
  return result;
}
