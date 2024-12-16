import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Calculate average rating
  let average =
    feedback.length > 0
      ? feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length
      : 0;

  // Round to 1 decimal place and remove trailing .0 if needed
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
