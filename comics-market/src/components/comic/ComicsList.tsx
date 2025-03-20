import React from "react";
import styles from "./ComicsList.module.css";
import Button from "../button/Button";
import Price from "../price/Price";
import clsx from "clsx";
import Comic from "../../types";

interface ComicListProps {
  comics: Comic[];
  onAdd?: (comic: Omit<Comic, "ISBN">) => void;
  onUpdate?: (ISBN: string, comic: Partial<Comic>) => void;
  onDelete?: (ISBN: string) => void;
}

const ComicsList: React.FC<ComicListProps> = ({
  comics,
  onAdd,
  onUpdate,
  onDelete,
}) => {
  return (
    <div className={styles.comicsContainer}>
      {comics.map((comic) => (
        <div key={comic.ISBN} className={styles.comicCard}>
          <img
            src={comic.urlImage}
            alt={comic.name}
            className={styles.comicImage}
          />
          <div className={styles.comicContent}>
            <h3 className={styles.comicName}>{comic.name}</h3>
            <p className={styles.comicAuthor}>Author: {comic.author}</p>
            <p className={styles.comicEditorial}>
              Editorial: {comic.editorial}
            </p>
            <p className={styles.comicGenre}>Genre: {comic.genre}</p>
            <p className={styles.comicDescription}>{comic.description}</p>
            <Price price={comic.price} shipping="Free Shipping" />
            <Button className={clsx(styles.button, styles.buy)} text="BUY" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComicsList;
