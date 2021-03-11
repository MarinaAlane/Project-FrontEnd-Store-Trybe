export function getCategories() {
  try {
    return (
      fetch('https://api.mercadolibre.com/sites/MLB/categories')
        .then((response) => response.json())
    );
  } catch (error) {
    console.log(error);
  }
}

export function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    return (
      fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
        .then((response) => response.json())
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromQuery(query) {
  try {
    return (
      await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
        .then((response) => response.json())
    );
  } catch (error) {
    console.log(error);
  }
}
