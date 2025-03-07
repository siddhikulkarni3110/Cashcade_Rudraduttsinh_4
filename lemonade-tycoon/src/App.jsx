import React, { useState } from "react";
import GameStore from "./gameStore";
import Wallet from "./wallet";
import Sidebar from "./sidebar";
import "./App.css";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const LemonadeGame = () => {
  const [money, setMoney] = useState(getRandomNumber(20, 50));
  const [lemons, setLemons] = useState(getRandomNumber(2, 10));
  const [sugar, setSugar] = useState(getRandomNumber(2, 10));
  const [ice, setIce] = useState(getRandomNumber(2, 10));

  const [target, setTarget] = useState(Math.floor(Math.random() * 10) + 1);

  return (
    <div className="game-container">
      <h1 style={{ color: "#8E44AD", fontWeight: "bold", textAlign: "center",fontFamily:"Cursive" ,fontSize:"45px",marginBottom:"10px"}}>
        Lemonade Tycoon
      </h1>

      <div className="main-layout">
        <div className="store-wallet-container">
          <div className="wallet-container">
            <Wallet money={money} />
          </div>

          {/* Flexbox container for Store and Target */}
          <div className="store-target-container">
            <div className="store-container">
              <GameStore
                money={money}
                setMoney={setMoney}
                lemons={lemons}
                setLemons={setLemons}
                sugar={sugar}
                setSugar={setSugar}
                ice={ice}
                setIce={setIce}
              />
            </div>

            <div className="target-container">
              <h3>Target</h3>
              <p>Make {target} Lemonades</p>
              <img src="/cup.png" alt="cup" className="target-image" />
            </div>
          </div>
        </div>

        {/* Pass the state values to Sidebar */}
        <Sidebar lemons={lemons} sugar={sugar} ice={ice} target={target} />

      </div>
    </div>
  );
};

export default LemonadeGame;
