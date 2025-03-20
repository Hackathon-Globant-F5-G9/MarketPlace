import pagesStyle from "../../pages/Pages.module.css";
import styles from "./AboutUsPage.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2>BOOM COMIC_About Us</h2>

        <p>
          Welcome to Boom Comics, the ultimate destination for comic book
          lovers! Founded by a group of passionate backend and frontend
          developers, Boom Comics was born out of our shared love for
          superheroes, epic storylines, and the vibrant world of graphic
          storytelling. We are more than just a marketplace; we are a community
          of enthusiasts who believe that comics are not just stories—they are
          art, culture, and a way of life.
        </p>
        <h3>Have a look!</h3>

        <ul>
          <li>
            Classic Comics: Relive the golden age of comics with timeless
            stories from Marvel, DC, and other iconic publishers.
          </li>
          <li>
            Limited Editions: Rare, hard-to-find comics that are perfect for
            collectors looking to add something special to their shelves.
          </li>
          <li>
            Indie Gems: Discover hidden treasures from independent creators who
            are pushing the boundaries of the medium.
          </li>
          <li>
            Super Cool Comics: Yes, we said it! We have those super cool, super
            stylish comics that make you go, “Wow, this is art!”
          </li>
        </ul>

        <h3>Our Story</h3>

        <p>
          Boom Comics started as a dream among a group of university students
          who spent countless nights coding, designing, and debating the merits
          of Marvel vs. DC. What brought us together was not just our technical
          skills but our unwavering passion for comics. We realized that while
          there were many places to buy comics, there wasn’t a platform that
          truly celebrated the diversity and uniqueness of the comic book world.
          That’s when we decided to create Boom Comics—a marketplace that caters
          to both casual readers and hardcore collectors.
        </p>

        <h6 className={styles.blueTitle}>AboutUsPage PAGE</h6>
      </div>
      <Footer />
    </>
  );
}
