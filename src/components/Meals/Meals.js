import MealsList from "./MealsList";
import MealsSummary from "./MealsSummary";
import style from "./Meals.module.css";

const Meals = () => {
  return (
    <div className={style["meals-container"]}>
      <MealsSummary />
      <MealsList />
    </div>
  );
};

export default Meals;
