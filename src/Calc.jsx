"use client";
import { useState } from "react";
const Calc = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [click, setClick] = useState(false);
  const clickFunction = () => {
    setClick((prev) => !prev);
  };
  return (
    <div className="flex gap-3">
      <input
        onChange={(e) => {
          setClick((prev) => false);
          // num1에 이벤트타입의 value로 값을 할당하는 과정
          setNum1((prev) => e.target.value);
        }}
        className="border-2 border-black"
        type="text"
      />
      <input
        onChange={(e) => {
          setClick((prev) => false);
          // num2에 이벤트타입의 value로 값을 할당하는 과정
          setNum2((prev) => e.target.value);
        }}
        className="border-2 border-black"
        type="text"
      />
      <button onClick={clickFunction}>+</button>
      {/* click이 true일때만 뒤의 +num1 + +num2 부분이 실행됨 */}
      <button>합: {click && +num1 + +num2}</button>
    </div>
  );
};

export default Calc;
// 강사님은 버튼 클릭하면 바로 더한 값이 나오도록 구현함
