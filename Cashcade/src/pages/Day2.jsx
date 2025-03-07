import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeachingDay2 from "./TeachingDay2"; // Importing the teaching component for Day 2
import "../theme.css"; // Importing CSS for styling

// Day2 component that manages lessons and interactive financial decision-making questions
const Day2 = ({ balance, updateBalance }) => {
  const navigate = useNavigate(); // Hook for navigation
  const [step, setStep] = useState("teaching"); // Track whether teaching or questions are shown
  const [questionIndex, setQuestionIndex] = useState(0); // Track the current question index
  const [summary, setSummary] = useState([]); // Store choices made by the user
  const [showSummary, setShowSummary] = useState(false); // Control summary visibility

  // Array of financial decision-making scenarios
  const situations = [
    {
      text: "You earned ₹100 for helping your aunt with her garden. What do you do?",
      choices: [
        { option: "Save it for future expenses", change: 100 },
        { option: "Spend half, save half", change: 50 },
        { option: "Buy some snacks for your friends", change: -50 },
      ],
    },
    {
      text: "You see a new cricket bat you really want, but it costs ₹500. You have ₹250 saved. What do you do?",
      choices: [
        { option: "Save more money first", change: 0 },
        { option: "Ask your parents for the rest", change: 0 },
        { option: "Buy a cheaper bat", change: 0 },
      ],
    },
    {
      text: "During Diwali, your school is raising funds for a charity. Do you want to donate?",
      choices: [
        { option: "Donate ₹100", change: -100 },
        { option: "Donate ₹50", change: -50 },
        { option: "Skip donating", change: 0 },
      ],
    },
    {
      text: "You can help your neighbor by tutoring their child in math for ₹200. Do you take the opportunity?",
      choices: [
        { option: "Yes, earn the extra money", change: 200 },
        { option: "No, I'm too busy", change: 0 },
      ],
    },
  ];

  // Function to handle user's choice and update balance
  const handleChoice = (choice) => {
    updateBalance(balance + choice.change); // Update balance based on user's choice
    const newSummary = [...summary, { text: situations[questionIndex].text, choice: choice.option }];
    setSummary(newSummary); // Store user's decision in summary

    // Move to the next question or show summary if all questions are answered
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
        <TeachingDay2 nextStep={() => setStep("questions")} />
      ) : showSummary ? ( 
        // Display the summary of user choices after all questions are answered
        <>
          <h2>Day 2 Summary</h2>
          <ul>
            {summary.map((item, index) => (
              <li key={index}>
                {item.text} <br />
                <strong>Your Choice:</strong> {item.choice}
              </li>
            ))}
          </ul>
          <button onClick={() => navigate("/day3")}>Go to Day 3 →</button> {/* Navigate to Day 3 */}
        </>
      ) : (
        // Display the current question with answer choices
        <>
          <h2>Day 2: Earning & Spending Wisely</h2>
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

export default Day2; // Exporting Day2 component
