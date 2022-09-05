import React, { useState } from "react";
import ColorInput from "./ColorInput";
import RangeInput from "./RangeInput";
import "./InputsContainer.css";

const INITIAL_STATE = {
  base: "#ffc600",
  spacing: "10",
  blur: "10",
};

function InputsContainer() {
  const [{ base, spacing, blur }, setState] = useState(INITIAL_STATE);

  const onChange = (evt) => {
    setState((state) => ({ ...state, [evt.target.name]: evt.target.value }));
  };

  return (
    <main className="controls">
      <h2>
        Update CSS Variables with{" "}
        <span className="hl" style={{ color: `${base}px` }}>
          JS
        </span>
      </h2>
      <RangeInput
        name="spacing"
        type="range"
        min="10"
        max="200"
        value={spacing}
        onChange={onChange}
      />
      <RangeInput
        name="blur"
        type="range"
        min="0"
        max="25"
        value={blur}
        onChange={onChange}
      />
      <ColorInput
        name="base"
        labelText="Base Color"
        type="color"
        value={base}
        onChange={onChange}
      />
      <img
        style={{
          padding: `${spacing}px`,
          background: base,
          filter: `blur(${blur}px)`,
        }}
        alt="city skyline at dawn"
        src="https://images.unsplash.com/photo-1470181942237-78ce33fec141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      />
    </main>
  );
}

export default InputsContainer;
