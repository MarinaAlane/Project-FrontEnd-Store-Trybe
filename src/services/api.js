export async function getCategories() {
  try {
    return (
      await fetch('https://api.mercadolibre.com/sites/MLB/categories')
        .then((response) => response.json())
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    return (
      await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
        .then((response) => response.json())
    );
  } catch (error) {
    console.log(error);
  }
}
