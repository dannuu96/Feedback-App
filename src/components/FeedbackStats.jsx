import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  // calculating ratings avg
  let Average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  Average = Average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4> {feedback.length} Reviews</h4>
      <h4>Average Ratings: {isNaN(Average) ? 0 : Average}</h4>
    </div>
  );
}
FeedbackStats.prototypes = {
  feedback: PropTypes.array.isRequired
};

export default FeedbackStats;
