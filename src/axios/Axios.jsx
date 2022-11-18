import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Search from "./Search";
const Axios = () => {
  const [veggie, setVeggie] = useState([]);
  // Make a request for a user with a given ID
  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      axios
        .get(
          `https://api.spoonacular.com/recipes/random?apiKey=b184dbc986e2446e8754be05fc29fcbb&number=9&tags=vegetarian`
        )
        .then(function (response) {
          // handle success
          console.log(response.data.recipes);
          const data = response.data.recipes;
          localStorage.setItem("veggie", JSON.stringify(data));
          setVeggie(data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div>
        <Search />
      </div>
      {veggie.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </div>
  );
};

export default Axios;
