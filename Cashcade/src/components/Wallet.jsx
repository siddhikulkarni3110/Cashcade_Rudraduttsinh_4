import React from "react"; // Importing React to create a functional component

// Wallet component that receives balance as a prop
const Wallet = ({ balance }) => {
  return (
    <div className="wallet">
      {/* Displaying the current wallet balance */}
      <h3>Current Balance: ₹{balance}</h3>
    </div>
  );
};

export default Wallet; // Exporting Wallet component for use in other parts of the app
