import React from "react";

export default function inputFactory({
  type,
  name,
  labelText,
  value,
  onChange,
  onMouseMove,
  min,
  max,
  step,
}) {
  switch (type) {
    case "color":
      return (
        <input type={type} name={name} value={value} onChange={onChange} />
      );
    case "range":
      return (
        <>
          <label htmlFor={name}>{labelText}</label>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onMouseMove={onMouseMove}
          />
        </>
      );
    default:
      throw new Error("Type is not recognized for input component");
  }
}
