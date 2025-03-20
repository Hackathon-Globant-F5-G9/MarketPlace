import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ComicsList from "../../components/comic/ComicsList";
import styles from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const { favorites } = useFavorites(); // Asegúrate de que useFavorites no sea undefined
  console.log(favorites);
  return (
    <>
      <Header />
      <main className={styles.homePageContainer}>
        <h1>My Favorite Comics</h1>
        {favorites.length > 0 ? (
          <ComicsList comics={favorites} />
        ) : (
          <p>You have no favorite comics yet.</p>
        )}
      </main>
      <Footer />
    </>
  );
}
