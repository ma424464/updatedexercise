import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import "./App.css";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Bicycling", type: "duration" },
    { name: "Jumping Jacks", type: "repetition" },
    { name: "Running", type: "duration" },
    { name: "Sit Ups", type: "duration" },
  ];

  return (
    <div className="App" style={{ textAlign: "left", padding: "20px" }}>
      {!selectedExercise ? (
        <div>
          <h1>Go Do Something!</h1>
          <p>Select an exercise:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "flex-start" }}>
            {exercises.map((exercise, index) => (
              <button
                key={index}
                onClick={() => setSelectedExercise(exercise)}
                style={{ textAlign: "left" }}
              >
                {exercise.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {selectedExercise.type === "repetition" ? (
            <RepetitionExercise
              name={selectedExercise.name}
              onBackToMenu={() => setSelectedExercise(null)}
            />
          ) : (
            <DurationExercise
              name={selectedExercise.name}
              onBackToMenu={() => setSelectedExercise(null)}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;