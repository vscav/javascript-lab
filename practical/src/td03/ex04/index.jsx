import React, { useEffect, useState } from "react";
import "./ex4.css";

export const ExerciseFourView = () => {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((res) => res.json())
      .then((heroes) => {
        setSuperheroes(heroes);
        console.log(superheroes);
      });
  });

  return (
    <main>
      <p>TODO</p>
    </main>
  );
};
