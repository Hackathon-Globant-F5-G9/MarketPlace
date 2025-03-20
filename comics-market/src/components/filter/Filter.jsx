import React from "react";
import styles from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={styles.filterContainer}>
      <h4 className={styles.blueTitle}>Filter</h4>
      <input
        type="text"
        placeholder="Search comics..."
        className={styles.filterInput}
      />
      <button className={styles.filterButton}>Search</button>
    </div>
  );
}
