import { createContext, useState } from "react";

// Create a context for managing the selected product state
export const ProductContext = createContext({
  selectedProduct: null, // State to store the selected product
  setSelectedProduct: () => {}, // Function to set the selected product
});

// Component to provide the ProductContext to its children
export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Define the context value
  const value = {
    selectedProduct,
    setSelectedProduct,
  };

  // Provide the context value to its children
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
