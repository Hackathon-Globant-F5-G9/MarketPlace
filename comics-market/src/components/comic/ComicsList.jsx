import React, { useState } from "react";
import styles from "./ComicsList.module.css";
import Button from "../button/Button";
import Price from "../price/Price";
import clsx from "clsx";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../../context/FavoritesContext";
import ComicModal from "../modal/Modal"; // Importar el Modal

export default function ComicsList({ comics }) {
  const [selectedComic, setSelectedComic] = useState(null);

  const handleCardClick = (comic) => {
    setSelectedComic(comic); // Mostrar el modal con el cómic seleccionado
  };

  const closeModal = () => {
    setSelectedComic(null); // Cerrar el modal
  };

  return (
    <div className={styles.comicsContainer}>
      {comics.map((comic) => (
        <ComicCard key={comic.isbn} comic={comic} onCardClick={handleCardClick} />
      ))}
      {/* Mostrar el modal si hay un cómic seleccionado */}
      {selectedComic && <ComicModal comic={selectedComic} onClose={closeModal} />}
    </div>
  );
}

function ComicCard({ comic, onCardClick }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.isbn === comic.isbn);

  return (
    <div className={styles.comicCard} onClick={() => onCardClick(comic)}>
      <div
        className={clsx(styles.favoriteIcon, {
          [styles.favoriteActive]: isFavorite,
        })}
        onClick={(e) => {
          e.stopPropagation(); // Evitar abrir el modal al hacer clic en el corazón
          toggleFavorite(comic);
        }}
      >
        <FaHeart />
      </div>
      <img src={comic.image} alt={comic.title} className={styles.comicImage} />
      <div className={styles.comicContent}>
        <h3 className={styles.comicName}>{comic.name}</h3>
        <p className={styles.comicAuthor}>Author: {comic.author}</p>
        <Price price={comic.price} shipping="Free Shipping" />
        <Button className={clsx(styles.button, styles.buy)} text="BUY" />
      </div>
    </div>
  );
}
