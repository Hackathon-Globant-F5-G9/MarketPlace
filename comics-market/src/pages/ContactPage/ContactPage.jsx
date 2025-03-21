import pagesStyle from "../../pages/Pages.module.css";
import styles from "./ContactPage.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <section>
            <div className={styles.title}><p className={styles.logoTitle}>BOOM COMICS</p><p>_Contact</p></div>
            <form>
      <div className={styles.contactItem}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div><br />

      <div className={styles.contactItem}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div><br />

      <div className={styles.contactItem}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4"></textarea>
      </div><br />

      <button type="submit">Enviar</button>
    </form>
           
        </section>
      <Footer />
    </>
  );
}
