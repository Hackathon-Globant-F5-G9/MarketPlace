import "./Button.css";

const Button = ({text, forma, handleClick}) => {

    return (
    <>
    <button className={forma} onClick={handleClick} >{text}</button>
    </>
  );
};

export default Button;