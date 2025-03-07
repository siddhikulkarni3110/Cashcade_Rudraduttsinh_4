import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeachingDay3 from "./TeachingDay3"; // Importing the teaching component for Day 3
import "../theme.css"; // Importing CSS for styling

// Day3 component that teaches smart money decisions through interactive questions
const Day3 = ({ balance, updateBalance }) => {
  const navigate = useNavigate(); // Hook for navigation
  const [step, setStep] = useState("teaching"); // Track whether the teaching or questions are shown
  const [questionIndex, setQuestionIndex] = useState(0); // Track the current question index
  const [summary, setSummary] = useState([]); // Store user choices for summary
  const [showSummary, setShowSummary] = useState(false); // Control summary visibility

  // Financial decision-making scenarios with an Indian context
  const situations = [
    {
      text: "You receive ₹1000 as a Diwali gift from your grandparents. What do you do?",
      choices: [
        { option: "Save it for future needs", change: 1000 },
        { option: "Buy a small gift for your parents and save the rest", change: 500 },
        { option: "Spend it all on a new video game", change: -1000 },
      ],
    },
    {
      text: "Your favorite street snack (pani puri) is on sale for ₹30. What do you do?",
      choices: [
        { option: "Buy in bulk for a discount", change: -20 },
        { option: "Buy just one plate", change: -10 },
        { option: "Skip buying it", change: 0 },
      ],
    },
    {
      text: "You have an opportunity to invest ₹200 in a local business that could give you ₹400 in return. Do you invest?",
      choices: [
        { option: "Yes, invest the ₹200", change: 200 },
        { option: "No, it's risky", change: 0 },
      ],
    },
  ];

  // Function to handle user's choice and update balance accordingly
  const handleChoice = (choice) => {
    updateBalance(balance + choice.change); // Update balance based on user's decision
    const newSummary = [...summary, { text: situations[questionIndex].text, choice: choice.option }];
    setSummary(newSummary); // Store the user's decision in summary

    // Move to the next question or show the summary if all questions are answered
    if (questionIndex < situations.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowSummary(true); // Display summary instead of navigating
    }
  };

  return (
    <div className="container">
      {step === "teaching" ? (
        // Show the teaching section first, then move to questions
        <TeachingDay3 nextStep={() => setStep("questions")} />
      ) : showSummary ? (
        // Display the summary of user choices after all questions are answered
        <>
          <h2>Day 3 Summary</h2>
          <ul>
            {summary.map((item, index) => (
              <li key={index}>
                {item.text} <br />
                <strong>Your Choice:</strong> {item.choice}
              </li>
            ))}
          </ul>
          <button onClick={() => navigate("/day4")}>Go to Day 4 →</button> {/* Navigate to day 4 */}
        </>
      ) : (
        // Display the current question with answer choices
        <>
          <h2>Day 3: Smart Money Decisions</h2>
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

export default Day3; // Exporting Day3 component
