import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data";
import { addCollectionAndDocuments } from "../utils/firebase-db/firebase.util";
import { getCategoriesAndDocuments } from "../utils/firebase-db/firebase.util";

//! Create a context with default values
export const CategoriesContext = createContext({
  categoriesMap: [],
});

//! Create a provider component that wraps its children with the context
export const CategoriesProvider = ({ children }) => {
  // State for managing the product data
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  // Set the initial data when the component mounts
  // useEffect(() => {
  //   setProducts(PRODUCTS);
  // }, []);

  //! Create a value object to be passed to the context provider
  const value = { categoriesMap };

  // Provide the context value to its children
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
