import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = ({ lemons, sugar, ice, target }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [resultModal, setResultModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleTabClick = (tab, imgSrc) => {
    setActiveTab(tab);
    setImageSrc(imgSrc);
  };

  const closeTab = () => {
    setActiveTab(null);
  };

  const openResultModal = () => {
    if (lemons >= target && sugar >= target && ice >= target) {
      setMessage("🎉 Congrats! You completed the target! 🎉");
    } else {
      setMessage("⚠️ You need more ingredients to meet the target.");
    }
    setResultModal(true);
  };

  const closeResultModal = () => {
    setResultModal(false);
  };

  // Softer pastel color shades inspired by the cup image
  const colors = ["#A7C7E7", "#89D4C3", "#F5B7A2", "#F8D59F", "#BFA6D9"];

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <img
          src="/rules.png"
          alt="Rules"
          onClick={() => handleTabClick("rules", "/rules-model.png")}
        />
        <p>Rules</p>
      </div>
      <div className="sidebar-item">
        <img
          src="/recipe.png"
          alt="Recipe"
          onClick={() => handleTabClick("Recipe", "/recipe-model.png")}
        />
        <p>Recipe</p>
      </div>
      <div className="sidebar-item">
        <img
          src="/learnings.png"
          alt="Learnings"
          onClick={() => handleTabClick("Learnings", "/leanings-model.png")}
        />
        <p>Learnings</p>
      </div>
      <div className="sidebar-item">
        <img src="/store.png" alt="Result" onClick={openResultModal} />
        <p>Result</p>
      </div>

      {activeTab && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeTab}>
              X
            </button>

            {imageSrc ? (
              <img src={imageSrc} alt={`${activeTab} Image`} className="modal-image" />
            ) : (
              <p>No image available</p>
            )}
          </div>
        </div>
      )}

      {resultModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeResultModal}>X</button>
            
            <p className="modal-title">You have</p>

            <div className="ingredient-container">
              <div className="ingredient-box" style={{ backgroundColor: colors[0] }}>
                {lemons} 🍋 Lemons
              </div>
              <div className="ingredient-box" style={{ backgroundColor: colors[1] }}>
                {ice} ❄️ Ice Cubes
              </div>
              <div className="ingredient-box" style={{ backgroundColor: colors[2] }}>
                {sugar} 🧂 Sugar Cubes
              </div>
            </div>

            <div className="target-box" style={{ backgroundColor: colors[3] }}>
              {message}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
