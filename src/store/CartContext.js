import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(items.length);

  const addItem = (item) => {
    console.log("adding item");
  };

  const removeItem = (id) => {
    console.log("removing item");
  };

  const providerValues = {
    items,
    setItems,
    totalAmount,
    setTotalAmount,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={providerValues}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
