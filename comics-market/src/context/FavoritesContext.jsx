import React, { createContext, useState, useContext } from "react";

// Create the context
const FavoritesContext = createContext();

// Custom hook to use the context
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  console.log("useFavorites context value:", context); // Debugging log
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

// Provider component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Function to toggle favorite comics
  const toggleFavorite = (comic) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(
        (fav) => fav.isbn === comic.isbn
      );
      if (isAlreadyFavorite) {
        // Remove from favorites
        return prevFavorites.filter((fav) => fav.isbn !== comic.isbn);
      } else {
        // Add to favorites
        return [...prevFavorites, comic];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
