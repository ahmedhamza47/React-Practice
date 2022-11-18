import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const [displayyInput, setDisplayInput] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/autocomplete?apiKey=b184dbc986e2446e8754be05fc29fcbb&number=10&query=${input}`
      )
      .then(function (response) {
        console.log(response);
        setInput(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(input);
  };
  return (
    <>
      <input
        type="text"
        name="input"
        onChange={(e) => setInput(e.target.value)}
      />
      {displayyInput.map((item) => {
        <li>{item.title}</li>;
      })}
    </>
  );
};

export default Search;
