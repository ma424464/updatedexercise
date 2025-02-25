import React, { useState } from "react";

function RepetitionExercise({ name, onBackToMenu }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{name}</p>
      <p>Reps: {count}</p>
      <div style={{ display: "flex" }}>
        <button onClick={() => setCount(count + 1)}>Complete Rep</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={onBackToMenu}>Return</button>
      </div>
    </div>
  );
}

export default RepetitionExercise;