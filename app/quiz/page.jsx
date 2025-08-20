"use client";
import { useState } from "react";
const Page = () => {
  // quiz 1. - 0 + 구현하기
  // quiz 2. 이모지 누르면 😎<->😴
  const [num, setNum] = useState(0);
  const [icon, setIcon] = useState("😎");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 justify-center items-center">
        <button onClick={() => setNum((x) => x - 1)}>-</button>
        <span>{num}</span>
        <button onClick={() => setNum((x) => x + 1)}>+</button>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <button
          onClick={() => setIcon((x) => (x == "😎" ? (x = "😴") : (x = "😎")))}
        >
          {icon}
        </button>
      </div>
    </div>
  );
};

export default Page;
