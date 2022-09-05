import React, { useEffect, useState } from "react";
import Hand from "./Hand";
import "./clock.css";

function Clock() {
  const [date, setDate] = useState(() => new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearTimeout(intervalId);
    };
  });

  const secondDegrees = () => (date.getSeconds() / 60) * 360;
  const minuteDegrees = () => (date.getMinutes() / 60) * 360;
  const hourDegrees = () => (date.getHours() / 12) * 360;

  return (
    <div className="clock">
      <div className="clock-face">
        <Hand type="hour" degrees={hourDegrees()} />
        <Hand type="minute" degrees={minuteDegrees()} />
        <Hand type="second" degrees={secondDegrees()} />
      </div>
    </div>
  );
}

export default Clock;
