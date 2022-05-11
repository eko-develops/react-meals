import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
  };

  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartProvider;
