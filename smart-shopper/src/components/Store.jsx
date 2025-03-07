import React from "react";
import "./../styles/Store.css";

const products = [
  { id: 1, name: "Milk", price: 50, image: "/images/milk.png" },
  { id: 2, name: "Notebook", price: 100, image: "/images/notebook.jpeg" },
  { id: 3, name: "Shoes", price: 500, image: "/images/shoes.jpeg" },
  { id: 4, name: "Toy Car", price: 300, image: "/images/toy_car.jpeg" },
  { id: 5, name: "Vegetables", price: 150, image: "/images/vegetable.png" },
  { id: 6, name: "Video Game", price: 1000, image: "/images/videogame.png" },
];

const Store = ({ addToCart }) => {
  return (
    <div className="store">
      <h2>🛒 Available Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
