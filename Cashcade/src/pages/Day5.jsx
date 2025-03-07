import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeachingDay5 from "./TeachingDay5"; // Importing Teaching Component
import "../theme.css"; // Import global styles

const Day5 = ({ balance, updateBalance }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState("teaching");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [summary, setSummary] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  // Investment decision scenarios
  const situations = [
    {
      text: "You receive ₹5000 as a bonus. How do you use it?",
      choices: [
        { option: "Invest in stocks for potential growth", change: 3000 },
        { option: "Put it in a Fixed Deposit for safety", change: 2000 },
        { option: "Spend it on shopping", change: -5000 },
      ],
    },
    {
      text: "Your friend suggests investing in a high-risk crypto scheme. What do you do?",
      choices: [
        { option: "Invest a small amount you can afford to lose", change: 1000 },
        { option: "Research more before deciding", change: 0 },
        { option: "Invest all your savings in it", change: -5000 },
      ],
    },
    {
      text: "You want to invest in gold. How do you proceed?",
      choices: [
        { option: "Buy physical gold", change: 2000 },
        { option: "Invest in digital gold or Gold ETFs", change: 3000 },
        { option: "Ignore and keep money in cash", change: 0 },
      ],
    },
  ];

  // Handle user's choice and update balance
  const handleChoice = (choice) => {
    updateBalance(balance + choice.change);
    const newSummary = [...summary, { text: situations[questionIndex].text, choice: choice.option }];
    setSummary(newSummary);

    // Move to the next question or show the summary
    if (questionIndex < situations.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowSummary(true);
    }
  };

  return (
    <div className="container">
      {step === "teaching" ? (
        <TeachingDay5 nextStep={() => setStep("questions")} />
      ) : showSummary ? (
        <>
          <h2>Day 5 Summary</h2>
          <ul className="summary-list">
            {summary.map((item, index) => (
              <li key={index} className="summary-item">
                {item.text} <br />
                <strong>Your Choice:</strong> {item.choice}
              </li>
            ))}
          </ul>
          <button className="next-button" onClick={() => navigate("/")}>
            Finish the Lesson →
          </button>
        </>
      ) : (
        <>
          <h2>Day 5: Smart Investments</h2>
          <p>{situations[questionIndex].text}</p>
          <div className="choices-container">
            {situations[questionIndex].choices.map((choice, index) => (
              <button 
                key={index} 
                className="choice-button"
                onClick={() => handleChoice(choice)}
              >
                {choice.option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Day5;
