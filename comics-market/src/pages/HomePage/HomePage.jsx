import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ComicsList from "../../components/comic/ComicsList";
import styles from "./HomePage.module.css";
import { fetchComics } from "../../api-services/comics.service";

export default function HomePage() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const loadComics = async () => {
      try {
        const comicsData = await fetchComics();
        setComics(comicsData);
      } catch (error) {
        console.error("Error fetching comics:", error);
      }
    };

    loadComics();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.homePageContainer}>
        <ComicsList comics={comics} />
      </main>
      <Footer />
    </>
  );
}
