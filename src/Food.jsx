"use client";
import { useState } from "react";
const Food = () => {
  const [food, setFood] = useState("");
  const [isClick, setIsclick] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <input
        onChange={(e) => {
          setIsclick((x) => false);
          setFood((x) => e.target.value);
        }}
        className="border-2 border-black"
        type="text"
      />
      <button onClick={() => setIsclick((x) => !x)}>등록</button>
      <div>내가 먹고 싶은것 : {isClick && food}</div>
    </div>
  );
};

export default Food;
