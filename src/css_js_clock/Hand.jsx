import React from "react";
import PropTypes from "prop-types";
import "./hand.css";

function Hand({ type, degrees }) {
  return (
    <div
      className={`hand ${type}-hand`}
      style={{ transform: `rotate(${degrees}deg)` }}
    ></div>
  );
}

Hand.propTypes = {
  type: PropTypes.string.isRequired,
  degrees: PropTypes.number.isRequired,
};

export default Hand;
