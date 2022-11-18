import React from "react";
import { useEffect } from "react";

const useCustomHook = (click) => {
  useEffect(() => {
    console.log(click);
  });
};

export default useCustomHook;
