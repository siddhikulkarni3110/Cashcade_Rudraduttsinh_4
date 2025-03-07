import React from "react";
import { useNavigate } from "react-router-dom"; // Hook for navigation
import "../theme.css"; // Ensure CSS contains styles for game layout

const GamePage = ({ gameUrl }) => {
  const navigate = useNavigate(); // Initialize navigation hook

  return (
    <div className="game-container">
      {/* Back button to navigate to the home page */}
      <button className="back-button" onClick={() => navigate("/")}>
        ←
      </button>

      {/* Embedding the game using an iframe */}
      <iframe 
        src={gameUrl} 
        title="Mini Game" 
        className="game-iframe"
      />
    </div>
  );
};

export default GamePage; // Exporting GamePage component
