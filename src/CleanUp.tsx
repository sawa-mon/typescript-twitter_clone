import React, { useEffect, useState } from "react";
import { increment } from "./features/counter/counterSlice";

export const CleanUp: React.FC = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const incrementNum = () => {
    console.log("Mouse event invoked !");
    setCurrentNum((preNumber) => preNumber + 1);
  };

  useEffect(() => {
    console.log("useEffect in CleanUp invoked !");
    window.addEventListener("mousedown", incrementNum);
    return () => {
      console.log("cleanUp!");
      window.removeEventListener("mousedown", incrementNum);
    };
  }, []);
  return <div>{currentNum}</div>;
};
