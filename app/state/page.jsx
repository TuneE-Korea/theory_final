"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
// quiz 1. counter 만들기 [- 0 +] (5이상 green, -5이하 red, 0이면 black)
// quiz 2. 하트 누르면 꽉찬거, 다시 누르면 빈 하트 만들기
const Page = () => {
  const [num, numSet] = useState(0);
  const minus = () => {
    numSet((x) => x - 1);
  };
  const plus = () => {
    numSet((x) => x + 1);
  };
  const [fill, fillSet] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>
          <button onClick={minus}>-</button>
          <span
            style={{ color: num >= 5 ? "green" : num <= -5 ? "red" : "black" }}
          >
            {num}
          </span>
          <button onClick={plus}>+</button>
        </div>
        <div>
          <span onClick={() => fillSet}>
            <Heart fill="" color="" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Page;
