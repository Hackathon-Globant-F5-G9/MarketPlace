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
        <h6 className={styles.blueTitle}>The Ultimate Comic Heaven!</h6>
        <p className={styles.text}>
          WHERE LEGENDS ARE BORN! Exclusive, limited-edition comics await—rare finds, iconic stories, unstoppable passion. Enter the ultimate collector’s universe! 💥🔥
        </p>
      </div>
      <Footer />
    </>
  );
}
