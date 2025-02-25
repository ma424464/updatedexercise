import React, { useState, useEffect } from "react";

function DurationExercise({ name, onBackToMenu }) {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); 
      }, 10); 
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((time % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    const milliseconds = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  const handleStartReset = () => {
    if (isRunning) {
      // reset and stop timer
      setTime(0);
      setIsRunning(false);
    } else {
      // start timer
      setIsRunning(true);
    }
  };

  return (
    <div>
      <p>{name}</p>
      <p>
        Timer: <span>{formatTime(time)}</span>{" "}
      </p>
      <div style={{ display: "flex" }}>
        <button onClick={handleStartReset}>
          {isRunning ? "Reset" : "Start"}
        </button>
        <button onClick={onBackToMenu}>Return</button>
      </div>
    </div>
  );
}

export default DurationExercise;