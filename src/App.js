import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Meals from "./components/Meals/Meals";
import Wave from "./components/UI/Wave/Wave";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const cart = cartOpen && (
    <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
  );

  return (
    <div className="App">
      <Wave />
      {cart}
      <Header setCartOpen={setCartOpen} />
      <main>
        <Meals />
      </main>
      <Footer />
    </div>
  );
}

export default App;
