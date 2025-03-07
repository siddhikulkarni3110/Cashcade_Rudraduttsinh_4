import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeachingDay1 from "./TeachingDay1"; 
import "../theme.css"; 

const Day1 = ({ balance, updateBalance }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState("teaching"); 
  const [questionIndex, setQuestionIndex] = useState(0);
  const [summary, setSummary] = useState([]); 
  const [showSummary, setShowSummary] = useState(false); 

  // Updated Profit-Loss Scenarios
  const situations = [
    {
      text: "You have ₹200. You can buy and sell lemonade. What do you do?",
      choices: [
        { option: "Invest ₹100 in lemons & sugar, earn ₹250 (Profit)", change: 150 },
        { option: "Spend ₹100 on snacks (Loss)", change: -100 },
        { option: "Keep ₹200 as it is (No profit/loss)", change: 0 },
      ],
    },
    {
      text: "Your friend offers you a deal: Buy a toy for ₹50 and sell it for ₹80. What do you do?",
      choices: [
        { option: "Buy and sell it (Profit ₹30)", change: 30 },
        { option: "Buy and keep it (Loss ₹50)", change: -50 },
        { option: "Ignore the deal (No change)", change: 0 },
      ],
    },
    {
      text: "You found ₹500. You can start a small business. What do you do?",
      choices: [
        { option: "Start a sticker business and earn ₹800 (Profit ₹300)", change: 300 },
        { option: "Spend ₹300 on clothes (Loss)", change: -300 },
        { option: "Save ₹500 for later (No profit/loss)", change: 0 },
      ],
    },
  ];

  // Handle choice selection
  const handleChoice = (choice) => {
    updateBalance(balance + choice.change); 
    const newSummary = [...summary, { text: situations[questionIndex].text, choice: choice.option }];
    setSummary(newSummary); 

    if (questionIndex < situations.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowSummary(true);
    }
  };

  return (
    <div className="container">
      {step === "teaching" ? (
        <TeachingDay1 nextStep={() => setStep("questions")} />
      ) : showSummary ? ( 
        <>
          <h2>Day 1 Summary</h2>
          <ul>
            {summary.map((item, index) => (
              <li key={index}>
                {item.text} <br />
                <strong>Your Choice:</strong> {item.choice}
              </li>
            ))}
          </ul>
          <button onClick={() => navigate("/day2")}>Go to Day 2 →</button>
        </>
      ) : (
        <>
          <h2>Day 1: Profit & Loss Decisions</h2>
          <p>{situations[questionIndex].text}</p>
          {situations[questionIndex].choices.map((choice, index) => (
            <button key={index} onClick={() => handleChoice(choice)}>
              {choice.option}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default Day1;
