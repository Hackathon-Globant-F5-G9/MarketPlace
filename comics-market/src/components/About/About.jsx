import React from "react";
import styles from "./About.module.css";


const MyComponent = () => {
    return (
        <section>
            <div className={styles.title}><p className={styles.logoTitle}>BOOM COMICS</p><p>_About</p></div>
            <p className={styles.paragraph}>Welcome to BOOM COMICS – The Ultimate Comic Haven!<br /> <br />

Are you a die-hard comic collector, a superhero fanatic, or just someone who loves the thrill of discovering rare gems? Then you’ve just landed in the perfect universe!
At BOOM COMICS, we connect passionate fans and collectors in a marketplace built for comic lovers, by comic lovers. Whether you’re hunting for that elusive first edition, looking to complete a series, or ready to let go of some of your prized treasures (to fund your next big find, of course!), this is your place to buy, sell, and geek out.<br /> <br />

Forget the multiverse. This is the one marketplace where every comic has a story, and every collector is part of the adventure. So suit up, sharpen your negotiating skills, and dive into the ultimate comic book marketplace!</p>
        </section>
    );
};

export default MyComponent;
