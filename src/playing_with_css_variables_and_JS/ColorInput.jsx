import React from "react";
import PropTypes from "prop-types";

function ColorInput({ name, value, onChange, labelText = name }) {
  return (
    <div className="input__container">
      <label htmlFor={name}>{labelText}:</label>
      <input type="color" name={name} value={value} onChange={onChange} />
    </div>
  );
}

ColorInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColorInput;
