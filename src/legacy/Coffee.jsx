"use client";
import { useState } from "react";

// quiz 1. <버튼 누르면 숫자 올라가도록 만들기>
// 아래처럼 선언하면 icon이라는 변수가 선언 된 것.(const icon = # 과 같음)
// quiz 2. <버튼 누르면 숫자 올라가도록 만들기 ver.2>
// quiz 3. 가격 계산기
// 아메리카노 2000원 추가
// 라떼 3000원 추가
// 바닐라 3500원 추가
// 총 금액: 0원
const Coffee = () => {
  const [price, setPrice] = useState(0);
  return (
    <>
      <div className="flex gap-3">
        <button onClick={() => setPrice((x) => (x += 2000))}>
          아메리카노(2000원)
        </button>
        <button onClick={() => setPrice((x) => (x += 3000))}>
          라떼(3000원)
        </button>
        <button onClick={() => setPrice((x) => (x += 3500))}>
          바닐라(3500원)
        </button>
        <span className="bg-black text-white">{`총 금액: ${price}원`}</span>
      </div>
    </>
  );
};

export default Coffee;
