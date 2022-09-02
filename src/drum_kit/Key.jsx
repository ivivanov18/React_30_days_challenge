import React from "react";
import PropTypes from "prop-types";
import "./key.css";

function Key({ keyCode, letter, soundName, sound, playing, onTransitionEnd }) {
  return (
    <div
      onTransitionEnd={onTransitionEnd}
      data-key={keyCode}
      className={`key ${playing ? "playing" : ""}`}
    >
      <kbd>{letter}</kbd>
      <span className="sound">{soundName}</span>
      <audio data-key={keyCode} src={sound}></audio>
    </div>
  );
}

Key.propTypes = {
  keyCode: PropTypes.number.isRequired,
  letter: PropTypes.string.isRequired,
  soundName: PropTypes.string.isRequired,
  sound: PropTypes.string.isRequired,
  playing: PropTypes.bool.isRequired,
  onTransitionEnd: PropTypes.func.isRequired,
};

export default Key;
