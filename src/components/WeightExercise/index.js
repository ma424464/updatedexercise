import React, { useState } from "react";

function WeightExercise({ name, onBackToMenu }) {
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  const incrementReps = () => {
    setReps(reps + 1);
  };

  const resetExercise = () => {
    setReps(0);
    setWeight(0);
  };

  return (
    <div>
      <p>Reps: {reps}</p>
      <p>Weight: {weight} lbs</p>
      <button onClick={incrementReps}>Complete Rep</button>
      <button onClick={resetExercise}>Reset</button>
      <div>
        <label>
          Set Weight (lbs):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
          />
        </label>
      </div>
      <button onClick={onBackToMenu}>Return</button>
    </div>
  );
}

export default WeightExercise;