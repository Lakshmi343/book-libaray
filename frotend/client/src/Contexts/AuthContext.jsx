// AuthContext.js
import { createContext, useState } from 'react';

// Create the context
export const AuthContext = createContext();

// Create a provider for the context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user as null

  // Function to log the user in
  const login = (userData) => {
    setUser(userData);
  };

  // Function to log the user out
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
