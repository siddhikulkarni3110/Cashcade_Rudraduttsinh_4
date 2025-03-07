function ScoreBoard({ coins, level, totalLevels }) {
  return (
    <div className="scoreboard">
      <p>🏅 Coins: <strong>{coins}$</strong></p> {/* Added $ sign */}
      <p>📊 Level {level} / {totalLevels}</p>
    </div>
  );
}

export default ScoreBoard;
