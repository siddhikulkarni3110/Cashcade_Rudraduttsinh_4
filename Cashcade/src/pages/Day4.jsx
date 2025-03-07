import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeachingDay4 from "./TeachingDay4"; // Importing the teaching component
import "../theme.css"; // Importing CSS for styling

const Day4 = ({ balance, updateBalance }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState("teaching");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [summary, setSummary] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  // Banking-related decision-making scenarios
  const situations = [
    {
      text: "You received ₹10,000. What will you do?",
      choices: [
        { option: "Save it in a Fixed Deposit (Earn interest)", change: 1000 },
        { option: "Keep it in cash (No interest)", change: 0 },
        { option: "Spend on shopping", change: -3000 },
      ],
    },
    {
      text: "You need ₹50,000 for a new laptop. What’s the best way to get it?",
      choices: [
        { option: "Take a loan & repay monthly", change: -500 },
        { option: "Use all savings (No debt)", change: -50000 },
        { option: "Use a credit card (High interest)", change: -70000 },
      ],
    },
    {
      text: "Your friend suggests taking a ₹1,00,000 loan for a vacation. What do you do?",
      choices: [
        { option: "Decline & save for it instead", change: 0 },
        { option: "Take the loan (More debt)", change: -100000 },
        { option: "Invest it & earn profits", change: 20000 },
      ],
    },
  ];

  // Function to handle user's choice
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
        <TeachingDay4 nextStep={() => setStep("questions")} />
      ) : showSummary ? (
        <>
          <h2>Day 4 Summary</h2>
          <ul>
            {summary.map((item, index) => (
              <li key={index}>
                {item.text} <br />
                <strong>Your Choice:</strong> {item.choice}
              </li>
            ))}
          </ul>
          <button 
            onClick={() => navigate("/day5")}
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
            Go to Day 5 →
          </button>
        </>
      ) : (
        <>
          <h2>Day 4: Banking & Loans</h2>
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

export default Day4;
