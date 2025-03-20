import styles from "./NavItem.module.css";

export default function Navitem({ href, text }) {
  return (
    <li className={styles.navItem}>
      <a href={href} className={styles.navLink}>
        {text}
      </a>
    </li>
  );
}
