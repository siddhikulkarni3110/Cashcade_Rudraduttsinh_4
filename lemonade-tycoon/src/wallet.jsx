import React from "react";

const Wallet = ({ money }) => {
  return (
    <div className="wallet">
      <h2>Wallet</h2>
      <p>Money: {'\u20B9'}{money}</p>
    </div>
  );
};

export default Wallet;
