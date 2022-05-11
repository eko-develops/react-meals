import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import style from "./MealItemForm.module.css";

const MealItemForm = ({ id }) => {
  return (
    <form className={style.form}>
      <Input
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
    </form>
  );
};

export default MealItemForm;
