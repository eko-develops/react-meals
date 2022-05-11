import Button from "../Button/Button";
import style from "./HeaderCartButton.module.css";
import CartIcon from "../Icons/CartIcon/CartIcon";

const HeaderCartButton = ({ setCartOpen }) => {
  return (
    <Button onClick={() => setCartOpen(true)} className={style["cart-button"]}>
      <CartIcon width="30" fill="#fff" />
      <span>Cart</span>
    </Button>
  );
};

export default HeaderCartButton;
