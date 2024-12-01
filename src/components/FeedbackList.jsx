import React from "react";
import propTypes from 'prop-types'
import Feedbackitems from "./Feedbackitems";


function FeedbackList({ feedback, handleDelete}) {
  if (!feedback || feedback.length === 0) {
    return <p>NO FEED BACK YET</p>;
  }



  return (
    <div className="Feedback-list">
      {feedback.map((item) => (
        <Feedbackitems key={item.id} item={item}
        handleDelete= {handleDelete}/>
      ))}
    </div>
  );
}
FeedbackList.propTypes ={
  feedback:propTypes.arrayOf(
  propTypes.shape({
    id: propTypes.number.isRequired,
    text: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
  })
)
}

export default FeedbackList;
