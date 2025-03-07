import React from "react";
import { buyItem } from "./gameLogic";
import "./App.css";
const GameStore = ({ money, setMoney, lemons, setLemons, sugar, setSugar, ice, setIce }) => {
  return (
    <div className="store">
      <h2>Lemonade Store</h2>
      <p>Lemons: {lemons}</p>
      <p>Sugar: {sugar}</p>
      <p>Ice: {ice}</p>
      <button style={{background:"#8E44AD",color:"#FAEBD7"}} onClick={() => buyItem("lemons", money, setMoney, lemons, setLemons)}>Buy Lemon ({'\u20B9'}2)</button>
      <button style={{background:"#8E44AD",color:"#FAEBD7"}} onClick={() => buyItem("sugar", money, setMoney, sugar, setSugar)}>Buy Sugar ({'\u20B9'}2)</button>
      <button style={{background:"#8E44AD",color:"#FAEBD7"}} onClick={() => buyItem("ice", money, setMoney, ice, setIce)}>Buy Ice ({'\u20B9'}2)</button>
    </div>
  );
};

export default GameStore;
