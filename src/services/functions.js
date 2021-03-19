export function findProductLocalStorage(id) {
  const { length } = localStorage;
  const result = [];

  if (length > 0) {
    for (let index = 1; index <= length; index += 1) {
      const gottenItemObj = JSON.parse(
        localStorage.getItem(`itemProduct${index}`),
      );

      if (gottenItemObj.id === id) {
        result.push(gottenItemObj);
        result.push(index);
      }
    }
  }

  return result;
}

export default function saveProductLocalStorage(array) {
  const findArray = findProductLocalStorage(array.id);
  const { length } = localStorage;
  const newObj = array;
  let findObj = 0;

  if (findArray.length > 0) {
    const [gottenItemObj, index] = findArray;

    if (gottenItemObj.id === array.id) {
      console.log(gottenItemObj.id, array.id);
      gottenItemObj.quantity += 1;
      findObj += 1;
      localStorage.setItem(
        `itemProduct${index}`,
        JSON.stringify(gottenItemObj),
      );
    }
  }

  if (length === 0 || findObj === 0) {
    newObj.quantity = 1;
    localStorage.setItem(`itemProduct${length + 1}`, JSON.stringify(newObj));
  }
}

export function quantityAllProductsCart() {
  const { length } = localStorage;

  if (length > 0) {
    let sum = 0;

    for (let index = 1; index <= length; index += 1) {
      const gottenItemObj = JSON.parse(
        localStorage.getItem(`itemProduct${index}`),
      );
      sum += gottenItemObj.quantity;
    }

    return sum;
  }

  return length;
}
