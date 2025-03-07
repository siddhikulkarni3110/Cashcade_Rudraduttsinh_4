import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import hooks for navigation and state access

const Summary = () => {
  const location = useLocation(); // Hook to access the current location state
  const navigate = useNavigate(); // Hook to enable navigation between pages
  
  // Retrieve summary data from the state (default to empty array if not available)
  const summary = location.state?.summary || [];

  // Extract the current day number from the state, defaulting to 1 if not found
  const currentDay = parseInt(location.state?.dayNumber || 1);
  const nextDay = currentDay + 1; // Determine the next day

  return (
    <div className="container">
      {/* Displaying the current day's summary */}
      <h2>Day {currentDay} Summary</h2>
      <ul>
        {/* Iterating through summary data and displaying the user's choices */}
        {summary.map((item, index) => (
          <li key={index}>
            {item.text} <br />
            <strong>Your Choice:</strong> {item.choice}
          </li>
        ))}
      </ul>
      
      {/* Button to proceed to the next day, passing updated dayNumber in state */}
      <button onClick={() => navigate(`/day${nextDay}`, { state: { dayNumber: nextDay } })}>
        Go to Day {nextDay}
      </button>
    </div>
  );
};

export default Summary; // Exporting the component for use in other parts of the app
