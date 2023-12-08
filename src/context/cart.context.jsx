import { createContext, useEffect, useState } from "react";

//! Function to add an item to the cart
export const addCartItem = (cartItems, productToAdd) => {
  //? Check if the product to add is already in the cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //? If the product is already in the cart, update its quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //? If the product is not in the cart, add it with quantity 1
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//! Create a context for managing the shopping cart state
export const CartContext = createContext({
  isCartOpen: false, // State for tracking whether the cart is open or closed
  setIsOpen: () => {}, // Function to set the state of the cart (open or closed)
  cartItems: [], // Array to store the items in the cart
  addItemToCart: () => {}, // Function to add an item to the cart
  cartCount: 0, // State to track the total number of items in the cart
});

//! CartProvider component responsible for managing the cart state
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false); // State for tracking whether the cart is open or closed
  const [cartItems, setCartItems] = useState([]); // State to store the items in the cart
  const [cartCount, setCartCount] = useState(0); // State to track the total number of items in the cart

  //? Update the cart count whenever the cart items change
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  //! Function to add an item to the cart
  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  //! Value object containing the states and functions to be provided to the context
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  //! Provide the context value to the children components
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
