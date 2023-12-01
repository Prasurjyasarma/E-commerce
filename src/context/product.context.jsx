import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";

// Create a context with default values
export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
});

// Create a provider component that wraps its children with the context
export const ProductProvider = ({ children }) => {
  // State for managing the product data
  const [products, setProducts] = useState(PRODUCTS);

  // Set the initial data when the component mounts
  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  // Create a value object to be passed to the context provider
  const value = { products, setProducts };

  // Provide the context value to its children
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
