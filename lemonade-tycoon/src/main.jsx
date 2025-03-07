import React from "react";
import ReactDOM from "react-dom/client";
import LemonadeGame from "./App";
import "./index.css";

console.log("Rendering LemonadeGame...");  // Debugging log

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LemonadeGame />
  </React.StrictMode>
);
