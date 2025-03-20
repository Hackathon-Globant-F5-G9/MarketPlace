import styles from "./Header.module.css";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import NavItem from "../navitem/Navitem";
import Button from "../button/Button";
import clsx from "clsx";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <Navbar>
        <NavItem href="/home" text="Home" />
        <NavItem href="/favorites" text="Favorites" />
      </Navbar>
      <Button buttonClass="logIn" text="Log in" />
      <Button buttonClass="sell" text="Sell" />

    </header>
  );
}
