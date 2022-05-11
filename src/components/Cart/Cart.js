import Modal from "../Modal/Modal";
import Button from "../UI/Button/Button";
// import Card from "../UI/Card/Card";
import style from "./Cart.module.css";

const Cart = ({ setCartOpen, cartOpen }) => {
  const cartItems = (
    <ul className={style["cart-items"]}>
      {[
        {
          id: "m1",
          name: "Sushi",
          price: 22.99,
          qty: 2,
        },
        {
          id: "m2",
          name: "Schnitzel",
          price: 16.5,
          qty: 3,
        },
        {
          id: "m3",
          name: "Barbecue Burger",
          price: 12.99,
          qty: 1,
        },
        {
          id: "m4",
          name: "Green Bowl",
          price: 18.99,
          qty: 1,
        },
      ].map((item) => (
        <li key={item.id} className={style["cart-item"]}>
          <div className={style["cart-item"]}>
            <div className={style.test}>
              <h4>{item.name}</h4>
              <p>{item.price.toFixed(2)} each</p>
              <span>Qty: {item.qty}</span>
            </div>
            <div className={style.subtotal}>
              <h5>
                {item.qty} x {item.price.toFixed(2)}
              </h5>
              <p>{`$${(item.qty * item.price).toFixed(2)}`}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal setCartOpen={setCartOpen} cartOpen={cartOpen}>
      {cartItems}
      <div className={style.totals}>
        <div className={style["totals-labels"]}>
          <p>Subtotal</p>
          <p>Tax</p>
          <p>Total</p>
        </div>
        <div className={style["totals-price"]}>
          <p>$100.00</p>
          <p>$5.00</p>
          <p>$105.00</p>
        </div>
      </div>
      <div className={style.actions}>
        <Button onClick={() => setCartOpen(false)} type="button">
          Close
        </Button>
        <Button type="button">Checkout</Button>
      </div>
    </Modal>
  );
};

export default Cart;
