import React from "react";
import { useNavigate } from "react-router-dom"; // Hook for navigation
import "../theme.css"; // Import global styles

const Game2 = () => {
  const navigate = useNavigate(); // Initialize navigation hook

  return (
    <div className="fullscreen-container">
      {/* Embedding Game 2 inside an iframe */}
      <iframe 
        src="http://localhost:5175/" 
        title="Smart Shopper" 
        className="fullscreen-iframe"
      ></iframe>

      {/* Button to navigate back to the home page */}
      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default Game2; // Exporting Game2 component
