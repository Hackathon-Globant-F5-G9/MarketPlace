import pagesStyle from "../../pages/Pages.module.css";
import styles from "./WelcomePage.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function WelcomePage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>BOOM COMICS</h1>
        <h6>The Ultimate Comic Heaven!</h6>
        <h6>Enjoy the friki paradise</h6>
      </div>
      <Footer />
    </>
  );
}
