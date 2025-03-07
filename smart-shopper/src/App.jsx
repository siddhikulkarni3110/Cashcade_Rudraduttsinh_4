import React, { useState } from "react";
import Store from "./components/Store";
import Cart from "./components/Cart";
import "./styles/App.css";

const BUDGET_LIMIT = 1000; // Maximum budget

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const totalSpent = cart.reduce((sum, item) => sum + item.price, 0);
    if (totalSpent + product.price > BUDGET_LIMIT) {
      alert("🚨 Budget Exceeded! You cannot add more items.");
      return;
    }
    setCart([...cart, product]);
  };

  return (
    <div className="app-container">
      <h1>Smart Shopper 🛍️</h1>
      <h3>💰 Budget Limit: ₹{BUDGET_LIMIT}</h3>
      <div className="content">
        <Store addToCart={addToCart} />
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default App;
