import React from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation

// Navbar component that receives balance as a prop
const Navbar = ({ balance }) => {
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <div className="navbar">
      {/* Clicking on "Cashcade" will navigate to the home page ("/") */}
      <h2 className="logo" onClick={() => navigate("/")}>Cashcade</h2>

      {/* Displaying wallet balance */}
      <div className="wallet">💰 Wallet: ₹{balance}</div>
    </div>
  );
};

export default Navbar; // Exporting Navbar component
