import pagesStyle from "../../pages/Pages.module.css";
import styles from "./WelcomePage.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import clsx from "clsx";

export default function WelcomePage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h6 className={styles.blueTitle}>BOOM COMICS</h6>
        <h6 className={styles.blueTitle}>The Ultimate Comic Heaven!</h6>
      </div>
      <Footer />
    </>
  );
}
