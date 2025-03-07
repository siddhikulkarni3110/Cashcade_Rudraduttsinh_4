import React from "react";
import { useNavigate } from "react-router-dom"; // Hook for navigation
import "../theme.css"; // Import global styles

const Game3 = () => {
  const navigate = useNavigate(); // Initialize navigation hook

  return (
    <div className="fullscreen-container">
      {/* Embedding Game 3 inside an iframe */}
      <iframe 
        src="http://localhost:5176/" 
        title="Save or Spend" 
        className="fullscreen-iframe"
      ></iframe>

      {/* Button to navigate back to the home page */}
      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default Game3; // Exporting Game3 component
