import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import style from "./MealItemForm.module.css";
// import { useContext, useRef, useState } from "react";
import { useRef, useState } from "react";
// import { CartContext } from "../../store/CartContext";

const MealItemForm = ({ id, addToCartHandler }) => {
  // const { addItem } = useContext(CartContext);

  const [amountIsValid, setAmountIsValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredAmountNummber = Number(amountInputRef.current.value);

    if (
      amountInputRef.current.value.trim().length === 0 ||
      enteredAmountNummber < 1 ||
      enteredAmountNummber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    addToCartHandler(enteredAmountNummber);
  };

  const amountInputRef = useRef();

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
        className={style.input}
        label="QTY"
        options={{
          id: `amount_${id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: 1,
        }}
      />
      <Button className={style.button} type="submit">
        Add to Cart
      </Button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
