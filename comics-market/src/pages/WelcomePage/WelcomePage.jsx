import pagesStyle from "../../pages/Pages.module.css";
import styles from "./WelcomePage.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function WelcomePage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>BOOM COMICS</h1>
        <h2>The Ultimate Comic Heaven!</h2>
        <h6 className={styles.blueTitle}>WELCOME PAGE</h6>
      </div>
      <Footer />
    </>
  );
}
