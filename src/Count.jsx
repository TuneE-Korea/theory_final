"use client";

import { useState } from "react";

// quiz. 10 이상이면 파란색
// css 접근을 어떻게 하지? -> style 속성 활용
const Count = () => {
  const [num, numSet] = useState(0);
  const minus = () => numSet((x) => x - 1);
  const plus = () => numSet((x) => x + 1);
  return (
    <>
      <div className="flex gap-3">
        <button onClick={minus}>-</button>
        <span style={{ color: num >= 10 ? "blue" : "black" }}>{num}</span>
        <button onClick={plus}>+</button>
      </div>
    </>
  );
};

export default Count;
