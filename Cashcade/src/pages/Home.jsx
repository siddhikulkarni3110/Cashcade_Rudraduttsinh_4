import React from "react";
import { useNavigate } from "react-router-dom"; // Hook for navigation
import "../theme.css"; // Ensure CSS contains styles for layout and buttons

const Home = () => {
  const navigate = useNavigate(); // Initialize navigation hook

  return (
    <div className="container">
      {/* Welcome message */}
      <h1>Welcome to Cashcade 🎉</h1>
      <p>Learn money management through fun interactive lessons.</p>
      
      {/* Button to start the main game (navigates to Day 1) */}
      <button className="start-button" onClick={() => navigate("/day1")}>
        Start Game
      </button>

      {/* Mini-Games Section */}
      <h2>🎮 Mini-Games</h2>
      <div className="game-icons">
        {/* Mini-Game 1: Lemonade Tycoon */}
        <div className="game-icon" onClick={() => navigate("/game1")}>
          <img src="/icons/lemonadetycoon.png" alt="Game 1" />
          <p>Lemonade Tycoon</p>
        </div>

        {/* Mini-Game 2: Smart Shopper */}
        <div className="game-icon" onClick={() => navigate("/game2")}>
          <img src="/icons/smartshopper.png" alt="Game 2" />
          <p>Smart Shopper</p>
        </div>

        {/* Mini-Game 3: Save or Spend */}
        <div className="game-icon" onClick={() => navigate("/game3")}>
          <img src="/icons/savespend.png" alt="Game 3" />
          <p>Save Or Spend</p>
        </div>
      </div>
    </div>
  );
};

export default Home; // Exporting Home component
