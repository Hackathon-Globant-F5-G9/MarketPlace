import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ComicsList from "../../components/comic/ComicsList";
import styles from "./HomePage.module.css";
import Filter from "../../components/filter/Filter";

export default function HomePage() {
  const comics = [
    {
      isbn: 1,
      name: "Spider-Man: Homecoming",
      author: "Chikilicuatre",
      editorial: "editorialchunga",
      genre: "terror",
      description: "Peter Parker enfrenta nuevos desafíos como Spider-Man.",
      image: "https://arte9.com/wp-content/uploads/2023/09/Hulk.jpg",
      price: 19.99,
    },
    {
      isbn: 2,
      name: "Spider-Man: Homecoming",
      author: "Chikilicuatre",
      editorial: "editorialchunga",
      genre: "terror",
      description: "Peter Parker enfrenta nuevos desafíos como Spider-Man.",
      image: "https://arte9.com/wp-content/uploads/2023/09/Hulk.jpg",
      price: 19.99,
    },
    {
      isbn: 3,
      name: "Spider-Man: Homecoming",
      author: "Chikilicuatre",
      editorial: "editorialchunga",
      genre: "terror",
      description: "Peter Parker enfrenta nuevos desafíos como Spider-Man.",
      image: "https://arte9.com/wp-content/uploads/2023/09/Hulk.jpg",
      price: 19.99,
    },
    {
      isbn: 4,
      name: "Spider-Man: Homecoming",
      author: "Chikilicuatre",
      editorial: "editorialchunga",
      genre: "terror",
      description: "Peter Parker enfrenta nuevos desafíos como Spider-Man.",
      image: "https://arte9.com/wp-content/uploads/2023/09/Hulk.jpg",
      price: 19.99,
    },
    {
      isbn: 5,
      name: "Spider-Man: Homecoming",
      author: "Chikilicuatre",
      editorial: "editorialchunga",
      genre: "terror",
      description: "Peter Parker enfrenta nuevos desafíos como Spider-Man.",
      image: "https://arte9.com/wp-content/uploads/2023/09/Hulk.jpg",
      price: 19.99,
    },
  ];

  return (
    <>
      <Header />
      <main className={styles.homePageContainer}>
        <Filter />
        <ComicsList comics={comics} />
      </main>
      <Footer />
    </>
  );
}
