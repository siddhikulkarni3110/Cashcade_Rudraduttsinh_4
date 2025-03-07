import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "../theme.css"; // Ensure styles for full-screen display

const Game1 = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  return (
    <div className="fullscreen-container"> 
      {/* Embedding the game inside an iframe */}
      <iframe 
        src="http://localhost:5174/" 
        title="Lemonade Tycoon" 
        className="fullscreen-iframe"
      ></iframe>

      {/* Button to navigate back to the home page */}
      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default Game1; // Exporting Game1 component
