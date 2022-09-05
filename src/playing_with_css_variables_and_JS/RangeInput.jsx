import React from "react";
import PropTypes from "prop-types";

function RangeInput({
  value,
  name,
  labelText = name,
  min = 0,
  max = 100,
  step = 1,
  onChange,
}) {
  return (
    <div className="input__container">
      <label htmlFor={name}>{labelText}:</label>
      <input
        type="range"
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
}

RangeInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
};

export default RangeInput;
