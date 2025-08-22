"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

// 하트 아이콘을 숫자가 0이면 검은색, 1이상이면 빨간색
const Like = () => {
  const [num, numSet] = useState(0);
  const plus = () => {
    numSet((x) => x + 1);
  };
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <button onClick={plus}>
            <Heart
              fill={num > 0 ? "red" : "white"}
              color={num > 0 ? "red" : "black"}
            />
          </button>
          <span>{num}</span>
        </div>
      </div>
    </>
  );
};

export default Like;
