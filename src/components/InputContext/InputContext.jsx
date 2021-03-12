import { createContext } from 'react';

const InputContext = createContext({
  inputValue: '',
  selectedCategory: '',
  setInputValue: () => {},
  setSelectedCategory: () => {},
});
export default InputContext;
