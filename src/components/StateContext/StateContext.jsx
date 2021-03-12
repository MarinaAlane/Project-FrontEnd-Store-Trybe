import { createContext } from 'react';

const StateContext = createContext({
  stateValue: '',
  setStateValue: () => {},
});
export default StateContext;
