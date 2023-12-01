import { createContext, useState } from "react";

// Create a context with default values
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Create a provider component that wraps its children with the context
export const UserProvider = ({ children }) => {
  // State for managing the current user
  const [currentUser, setCurrentUser] = useState(null);

  // Create a value object to be passed to the context provider
  const value = { currentUser, setCurrentUser };

  // Provide the context value to its children
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
