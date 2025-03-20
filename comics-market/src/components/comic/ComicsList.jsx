import React from "react";
import styles from "./ComicsList.module.css";
import Button from "../button/Button";
import Price from "../price/Price";
import clsx from "clsx";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../../context/FavoritesContext"; // Importamos el contexto

export default function ComicsList({ comics }) {
  return (
    <div className={styles.comicsContainer}>
      {comics.map((comic) => (
        <ComicCard key={comic.isbn} comic={comic} />
      ))}
    </div>
  );
}

function ComicCard({ comic }) {
  const { favorites, toggleFavorite } = useFavorites(); // Usamos el contexto
  const isFavorite = favorites.some((fav) => fav.isbn === comic.isbn);

  return (
    <div className={styles.comicCard}>
      {/* Icono de corazón */}
      <div
        className={clsx(styles.favoriteIcon, {
          [styles.favoriteActive]: isFavorite,
        })}
        onClick={() => toggleFavorite(comic)}
      >
        <FaHeart />
      </div>

      {/* Imagen del comic */}
      <img src={comic.image} alt={comic.title} className={styles.comicImage} />

      {/* Contenido del comic */}
      <div className={styles.comicContent}>
        <h3 id="Name" className={styles.comicName}>
          {comic.name}
        </h3>
        <p id="Author" className={styles.comicAuthor}>
          Author: {comic.author}
        </p>
        <p id="Editorial" className={styles.comicEditorial}>
          Editorial: {comic.editorial}
        </p>
        <p id="Genre" className={styles.comicGenre}>
          Genre: {comic.genre}
        </p>
        <p id="Description" className={styles.comicDescription}>
          {comic.description}
        </p>
        <Price price={comic.price} shipping="Free Shipping" />
        <Button className={clsx(styles.button, styles.buy)} text="BUY" />
      </div>
    </div>
  );
}
