import React from "react";
import styles from "./Contact.module.css";


const MyComponent = () => {
    return (
        <section>
            <div className={styles.title}><p className={styles.logoTitle}>BOOM COMICS</p><p>_Contact</p></div>
            <p className={styles.paragraph}>
            /// Formulario de contacto ///</p>
        </section>
    );
};

export default MyComponent;
