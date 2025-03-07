import React from "react";

const TeachingDay3 = ({ nextStep }) => {
  return (
    <div className="teaching-container">
      <h2>💡 Lesson: Smart Spending</h2>

      {/* Video Section */}
      <div className="video-container">
        <video width="100%" controls>
          <source src="/videos/smartspending.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Lesson Explanation */}
      <p>
        Spending money wisely is important! 💰 Instead of buying things impulsively, ask yourself:
      </p>
      <ul>
        <li>🔎 Do I really need this?</li>
        <li>💵 Is there a cheaper alternative?</li>
        <li>🛍️ Can I wait for a discount or sale?</li>
      </ul>
      <p>
        Making smart choices helps you save money and spend on what truly matters! 🚀  
      </p>

      {/* Proceed to Questions */}
      <button onClick={nextStep}>Got it! Next →</button>
    </div>
  );
};

export default TeachingDay3;
