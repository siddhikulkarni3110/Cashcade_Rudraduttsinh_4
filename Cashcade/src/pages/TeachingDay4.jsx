import React from "react";

const TeachingDay4 = ({ nextStep }) => {
  return (
    <div className="teaching-container">
      <h2>🏦 Lesson: Banking & Loans</h2>

      {/* Video Section */}
      <div className="video-container">
        <video width="100%" controls>
          <source src="/videos/banking.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Lesson Explanation */}
      <p>
        Banks help us save money, earn interest, and get loans when needed.  
        Understanding banking can help you manage money wisely!
      </p>

      <h3>🏦 Key Banking Concepts</h3>
      <ul>
        <li>💰 Saving Account: Store your money safely and earn interest.</li>
        <li>🏦 Fixed Deposit (FD): Lock your money for a set time and earn higher interest.</li>
        <li>📝 Loan: Borrow money from a bank and repay with interest.</li>
        <li>💳 Credit vs. Debit Card: Debit uses your money, while credit lets you borrow.</li>
      </ul>

      <h3>⚠️ Smart Loan Tips</h3>
      <p>Taking a loan can help, but always remember:</p>
      <ul>
        <li>📊 Borrow only what you can repay.</li>
        <li>💸 Pay EMIs on time to avoid extra charges.</li>
        <li>🏠 Home & education loans are good investments.</li>
      </ul>

      <p>Banking wisely helps you grow money and stay financially secure! 🚀</p>

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

export default TeachingDay4;
