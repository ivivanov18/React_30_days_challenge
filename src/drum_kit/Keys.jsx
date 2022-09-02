import React, { useState, useEffect } from "react";
import Key from "./Key";
import "./keys.css";
import initialKeys from "./drumKeys";
import { useRef } from "react";

function Keys() {
  const [keys, setKeys] = useState(initialKeys);

  const playSound = (e) => {
    if (keys[e.keyCode]) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      if (!audio) {
        return;
      }
      audio.currentTime = 0;
      audio.play();
      setKeys((keys) => ({
        ...keys,
        [e.keyCode]: { ...keys[e.keyCode], playing: true },
      }));
    }
  };

  const onTransitionEnd = (evt) => {
    if (evt.propertyName !== "transform") {
      return;
    }
    const keyCode = evt.target.attributes.getNamedItem("data-key").nodeValue;
    setKeys((keys) => ({
      ...keys,
      [keyCode]: { ...keys[keyCode], playing: false },
    }));
  };

  useEffect(() => {
    window.addEventListener("keydown", playSound);

    return () => {
      window.removeEventListener("keydown", playSound);
    };
  });

  return (
    <div className="keys" onKeyDown={playSound}>
      {Object.values(keys).map((v) => (
        <Key
          key={v.keyCode}
          keyCode={v.keyCode}
          letter={v.letter}
          soundName={v.soundName}
          sound={v.sound}
          playing={!!v.playing}
          onTransitionEnd={onTransitionEnd}
        />
      ))}
    </div>
  );
}

export default Keys;
