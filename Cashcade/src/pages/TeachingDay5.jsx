import React from "react";

const TeachingDay5 = ({ nextStep }) => {
  return (
    <div className="teaching-container">
    <h2>📈 Lesson: Smart Investments</h2>

      {/* Video Section */}
      <div className="video-container">
        <video width="100%" controls>
          <source src="/videos/investment.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Lesson Explanation */}
      <p>
        Investing helps grow your money over time. Instead of just saving, smart investments can give you higher returns.
      </p>

      <h3>💰 Common Investment Options</h3>
      <ul>
        <li>📊 Stocks: Buying shares of a company to earn profits.</li>
        <li>🏦 Fixed Deposits (FD): Safe investment with a fixed return over time.</li>
        <li>🏡 Real Estate: Buying property to sell later at a higher price.</li>
        <li>🪙 Gold & Mutual Funds: Long-term investment for wealth growth.</li>
      </ul>

      <h3>⚠️ Investment Tips</h3>
      <ul>
        <li>📈 Invest based on your financial goals and risk level.</li>
        <li>💸 Higher returns often mean higher risks.</li>
        <li>⏳ Long-term investments usually give better profits.</li>
      </ul>

      <p>Start investing early to secure your financial future! 🚀</p>

      {/* Proceed to Questions */}
      <button 
        onClick={nextStep} 
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "15px"
        }}
      >
        Got it! Next →
      </button>
    </div>
  );
};

export default TeachingDay5;
