import { createContext } from 'react';

const InputContext = createContext({
  inputValue: '',
  selectedCategory: '',
  cartProducts: [],
  setInputValue: () => {},
  setSelectedCategory: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});
export default InputContext;
