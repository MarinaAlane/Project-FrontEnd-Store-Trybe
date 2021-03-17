import ProductsAtCart from './data';

export function incrementProduct(newProduct) {
  const { title, image, price, productId, availableQnt } = newProduct;
  const findProduct = ProductsAtCart
    .find((product) => product.productId === newProduct.productId);
  if (!findProduct) {
    ProductsAtCart.push({ title, image, price, productId, quantity: 1, availableQnt });
  }
}

export function subtractQuantity() {
}
