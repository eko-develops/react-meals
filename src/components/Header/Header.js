import style from "./Header.module.css";
import HeaderCartButton from "../UI/HeaderCartButton/HeaderCartButton";

const Header = ({ setCartOpen }) => {
  return (
    <header className={style.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton setCartOpen={setCartOpen} />
    </header>
  );
};

export default Header;
