import style from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ name, description, price, id }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={style.meal}>
      <div>
        <h3 className={style["meal-name"]}>{name}</h3>
        <p className={style["meal-description"]}>{description}</p>
        <span className={style["meal-price"]}>{formattedPrice}</span>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
