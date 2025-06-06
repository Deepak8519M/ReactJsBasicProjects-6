import React from "react";
import "../style.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Meals() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        // console.log(res.data.meals);
        setItems(res.data.meals);
      })
      .catch((err) => console.log(err));
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} alt={strMeal} />
        <section className="content">
          <p>{strMeal}</p>
          <p>{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <div className="items-container">
      {itemsList.length > 0 ? (
        itemsList
      ) : (
        <p className="loading">Loading... Please Wait</p>
      )}
    </div>
  );
}

export default Meals;
