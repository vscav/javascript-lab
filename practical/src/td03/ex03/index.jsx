import React from "react";
import Fish from "./Fish";

export const ExerciseThreePage = () => {
  const [size, setSize] = React.useState(0);

  return (
    <main>
      <Fish size={size} />
      <button onClick={() => (size === 0 ? 1 : setSize(size--))}>-</button>
      <button onClick={() => setSize(size++)}>+</button>
    </main>
  );
};
