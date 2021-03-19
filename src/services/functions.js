export default function saveProduct(array) {
  const keyIndex = localStorage.length + 1;
  localStorage.setItem(`itemProduct${keyIndex}`, JSON.stringify(array));
}

export function saveAllProducts() {
  localStorage.set
}