const TeachingDay1 = ({ nextStep }) => {
  return (
    <div className="teaching-container">
      {/* Lesson Title */}
      <h2>📖 Lesson: Profit & Loss</h2>

      {/* Video Section */}
      <div className="video-container">
        <video width="100%" controls>
          <source src="/videos/profit-loss.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Explanation */}
      <p>
        Every time you make a financial decision, you either make a <strong>profit</strong> (gain money) 
        or face a <strong>loss</strong> (lose money). Making smart choices helps you grow your money, while 
        bad decisions can cause loss.
      </p>

      {/* Proceed to questions */}
      <button onClick={nextStep}>Got it! Next →</button>
    </div>
  );
};

export default TeachingDay1;
