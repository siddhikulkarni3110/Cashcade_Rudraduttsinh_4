function QuestionCard({ question, selected, onSelect }) {
  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <button
          key={index}
          className={`option-btn ${selected === option ? "selected" : ""}`}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default QuestionCard;
