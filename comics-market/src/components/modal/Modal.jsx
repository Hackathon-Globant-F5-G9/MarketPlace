// src/components/modal/ComicModal.jsx
import React from "react";
import styles from "./Modal.module.css";

export default function ComicModal({ comic, onClose }) {
  if (!comic) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <img src={comic.image} alt={comic.title} className={styles.modalImage} />
        <h2>{comic.name}</h2>
        <p><strong>Author:</strong> {comic.author}</p>
        <p><strong>Editorial:</strong> {comic.editorial}</p>
        <p><strong>Genre:</strong> {comic.genre}</p>
        <p>{comic.description}</p>
      </div>
    </div>
  );
}
