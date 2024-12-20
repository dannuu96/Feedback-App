import React from "react";
import propTypes from 'prop-types'

function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
  //   return (
  //     <div
  //       className="card"
  //       style={{
  //         backgroundColor: reverse ? "rgba (0,0,0,0.4)" : "#fff",
  //         color: reverse ? "#000" : "#fff",
  //       }}
  //     >
  //       {children}
  //     </div>
  //   );
  //
}
Card.defaultProps = {
  reverse:false,
}
Card.propTypes={
  children:propTypes.node.isRequired,
  reverse:propTypes.bool,  
}
export default Card;
