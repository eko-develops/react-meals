import style from "./Input.module.css";

const Input = ({ className, label, options }) => {
  return (
    <div>
      <label className={style.label} htmlFor={options.id}>
        {label}
      </label>
      <input className={`${style.input} ${className}`} {...options} />
    </div>
  );
};

export default Input;
