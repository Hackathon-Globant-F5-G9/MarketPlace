import "./Button.module.css";

const Button = ({ text, buttonClass, handleClick }) => {
  return (
    <>
      <button className={buttonClass} onClick={handleClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
