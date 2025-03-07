import React from "react";

const TeachingDay2 = ({ nextStep }) => {
  return (
    <div className="teaching-container">
      <h2>💼 Lesson: Earning Money</h2>

      {/* Video Section */}
      <div className="video-container">
        <video width="100%" controls>
          <source src="/videos/earning.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Lesson Explanation */}
      <p>
        Money can be earned in different ways! 💰  
        Some ways to earn money include:
      </p>
      <ul>
        <li>👨‍💻 Doing small jobs like helping parents or tutoring</li>
        <li>🛍️ Selling homemade or second-hand items</li>
        <li>📈 Investing wisely to grow your money</li>
      </ul>
      <p>  
        The earlier you start learning to earn money, the better your financial future will be! 🚀  
      </p>

      {/* Proceed to Questions */}
      <button onClick={nextStep}>Got it! Next →</button>
    </div>
  );
};

export default TeachingDay2;
