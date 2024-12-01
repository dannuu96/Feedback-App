import {FaTimes} from "react-icons/fa";
import Card from "./shared/Card";
import propTypes from "prop-types";

function Feedbackitems({ item , handleDelete}) {

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() =>handleDelete(item.id)} 
      className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display"> {item.text}</div>
    </Card>
  );
}
Feedbackitems.propTypes = {
  item: propTypes.object.isRequired,
};
export default Feedbackitems;
