import "./styles.css";

function HighlightedText() {
  return (
    <div className="highlight-container">
      <h1 className="highlight-text">
        All your business on{" "}
        <span className="highlight">one platform.</span>
      </h1>
      <p className="sub-text">
        Simple, efficient, yet <span className="blue-underline">affordable!</span>
      </p>
    </div>
  );
}

export default HighlightedText;
