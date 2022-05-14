import style from "./Input.module.css";
import React from "react";

const Input = React.forwardRef(({ className, label, options }, ref) => {
  return (
    <div>
      <label className={style.label} htmlFor={options.id}>
        {label}
      </label>
      <input ref={ref} className={`${style.input} ${className}`} {...options} />
    </div>
  );
});

export default Input;
