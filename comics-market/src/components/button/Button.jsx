import styles from "./Button.module.css";

const Button = ({ text, buttonClass, handleClick }) => {
  return (
    <button className={`${styles.button} ${styles[buttonClass]}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;

