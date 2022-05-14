import style from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import { CartContext } from "../../store/CartContext";

const MealItem = ({ name, description, price, id }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  const { addItem } = useContext(CartContext);

  const addToCartHandler = (amount) => {
    addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={style.meal}>
      <div>
        <h3 className={style["meal-name"]}>{name}</h3>
        <p className={style["meal-description"]}>{description}</p>
        <span className={style["meal-price"]}>{formattedPrice}</span>
      </div>
      <div>
        <MealItemForm addToCartHandler={addToCartHandler} id={id} />
      </div>
    </li>
  );
};

export default MealItem;
