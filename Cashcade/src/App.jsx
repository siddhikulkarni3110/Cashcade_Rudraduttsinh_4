import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Day3 from "./pages/Day3";
import Day4 from "./pages/Day4";
import Day5 from "./pages/Day5";
import GamePage from "./pages/GamePage"; // New component for games

const App = () => {
  const [balance, setBalance] = useState(20);

  return (
    <Router>
      <Navbar balance={balance} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day1" element={<Day1 balance={balance} updateBalance={setBalance} />} />
        <Route path="/day2" element={<Day2 balance={balance} updateBalance={setBalance} />} />
        <Route path="/day3" element={<Day3 balance={balance} updateBalance={setBalance} />} />
        <Route path="/day4" element={<Day4 balance={balance} updateBalance={setBalance} />} />
        <Route path="/day5" element={<Day5 balance={balance} updateBalance={setBalance} />} />
        
        {/* Mini-Game Routes */}
        <Route path="/game1" element={<GamePage gameUrl="http://localhost:5174/" />} />
        <Route path="/game2" element={<GamePage gameUrl="http://localhost:5175/" />} />
        <Route path="/game3" element={<GamePage gameUrl="http://localhost:5176/" />} />
      </Routes>
    </Router>
  );
};

export default App;
