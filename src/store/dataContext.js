import { createContext } from "react";

const DataContext = createContext({
  cart: [],
  user: {},
  addToCart: () => {},
  removeFromeCart: () => {},
});

export default DataContext;
