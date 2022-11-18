import React from "react";
import { useState } from "react";
import useCustomHook from "./useCustomHook";
const CustomHook = () => {
  const [click, setClick] = useState(0);
  const handleClick = () => {
    setClick(click + 1);
  };
  useCustomHook(click);
  return (
    <>
      <p>{click}</p>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
};

export default CustomHook;
