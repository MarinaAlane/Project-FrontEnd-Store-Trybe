export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await request.json();
  console.log(result);
}

export async function getProductsFromCategoryAndQuery(categoryId, query ) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${ categoryId}&q=${ query }`);
  const result = await request.json();
  console.log(result);
}
