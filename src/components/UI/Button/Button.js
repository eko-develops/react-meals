import style from "./Button.module.css";

const Button = ({ type, onClick, children, className }) => {
  return (
    <button
      className={`${style.button} ${className}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
