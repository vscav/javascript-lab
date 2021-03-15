import React from "react";

const Fish = ({ size }) => {
  const fishBody = `><${"=".repeat(size)}°>`;

  return <p>{fishBody}</p>;
};

export default Fish;
