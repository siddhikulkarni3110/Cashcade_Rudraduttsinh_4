import React, { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import questions from "../data/questions";
import ScoreBoard from "../components/ScoreBoard";

function GamePage() {
  const [level, setLevel] = useState(0);
  const [coins, setCoins] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[level].correct) {
      setCoins((prevCoins) => prevCoins + 10); // Add $10 for correct answer
      setFeedback("✅ Correct! +10$"); 
    } else {
      setFeedback("❌ Wrong! No money lost.");
    }
    setSelected(option);
  };

  const nextQuestion = () => {
    if (level < questions.length - 1) {
      setLevel(level + 1);
      setSelected(null);
      setFeedback("");
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setLevel(0);
    setCoins(0);
    setSelected(null);
    setFeedback("");
    setGameOver(false);
  };

  return (
    <div className="game-container">
      {/* Game Title */}
      <h1 className="game-title">Save Or Spend!</h1>

      <ScoreBoard key={coins} coins={coins} level={level + 1} totalLevels={questions.length} />
      
      {!gameOver ? (
        <>
          <QuestionCard
            question={questions[level]}
            selected={selected}
            onSelect={handleAnswer}
          />
          <p className={`feedback ${feedback ? "fade-in" : ""}`}>{feedback}</p>
          
          <button 
            onClick={nextQuestion} 
            className="next-btn"
            disabled={!selected} // Prevent moving to next question before selecting an option
          >
            {level < questions.length - 1 ? "Next Question" : "Finish"}
          </button>
        </>
      ) : (
        <>
          <p className="feedback fade-in">🎉 Game Completed! You earned {coins}$!</p>
          <button onClick={restartGame} className="restart-btn">
            Restart Game
          </button>
        </>
      )}
    </div>
  );
}

export default GamePage;
