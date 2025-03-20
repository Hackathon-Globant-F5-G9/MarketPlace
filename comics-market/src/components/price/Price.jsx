import React from "react";
import styles from "./Price.module.css";

export default function Price({ price, shipping }) {
  return (
    <div className={styles.priceContainer}>
      <span className={styles.price}>{price}€</span>
      <span className={styles.shipping}>{shipping}</span>
    </div>
  );
}
