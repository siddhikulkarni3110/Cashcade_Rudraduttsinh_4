import React, { useState } from "react";
import "./../styles/Cart.css";

const NEED_ITEMS = ["Milk", "Vegetables", "Notebook"];
const WANT_ITEMS = ["Shoes", "Toy Car", "Video Game"];

const Cart = ({ cart }) => {
  const [summary, setSummary] = useState(null);

  const totalSpent = cart.reduce((sum, item) => sum + item.price, 0);

  const calculateSummary = () => {
    let needList = [];
    let wantList = [];

    cart.forEach((item) => {
      if (NEED_ITEMS.includes(item.name)) {
        needList.push(item);
      } else {
        wantList.push(item);
      }
    });

    setSummary({
      total: totalSpent,
      needs: needList,
      wants: wantList,
    });
  };

  return (
    <div className="cart">
      <h2>🛍️ Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} />
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ₹{totalSpent}</h3>
          <button onClick={calculateSummary}>📝 View Summary</button>

          {summary && (
            <div className="summary">
              <h3>Shopping Summary</h3>
              <p><strong>Total Spent:</strong> ₹{summary.total}</p>
              <p><strong>🟢 Needs:</strong> {summary.needs.map(item => item.name).join(", ") || "None"}</p>
              <p><strong>🔴 Wants:</strong> {summary.wants.map(item => item.name).join(", ") || "None"}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
