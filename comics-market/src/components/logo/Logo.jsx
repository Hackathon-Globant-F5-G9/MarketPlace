import { Link } from "react-router-dom"; // Importamos Link de react-router-dom
import styles from "./Logo.module.css";
import Image from "../image/Image";
import logo from "../../assets/images/logo.png";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      {/* Envolvemos el logo en un Link */}
      <Link to="/welcome">
        <Image img={logo} alt="Logo de Boom Comics" />
      </Link>
    </div>
  );
}
