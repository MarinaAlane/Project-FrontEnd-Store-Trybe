export async function getCategories() {
  try {
    const endpoint = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const promise = await endpoint.json();
    return promise;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const endpoint = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
    const promise = await endpoint.json();
    return promise;
  } catch (error) {
    console.log(error);
  }
}
