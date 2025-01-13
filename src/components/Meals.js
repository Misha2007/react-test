import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:3001/meals";

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <ul id="meals">
      {data.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
