import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contentFooter}> 
                <p className= {styles.footerLogo}>BOOM COMICS</p>
                <nav className={styles.navbar}>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/private-policy">Private Policy</Link></li>
                    </ul>
                </nav>
                <div className={styles.socialMedia}>
                    <FaFacebook className={styles.socialMediaIcon} /> <FaInstagram className={styles.socialMediaIcon} /> <FaSquareXTwitter className={styles.socialMediaIcon} />
                </div>
            </div>
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} BOOM COMICS</p>
        </footer>
    );
};

export default Footer;