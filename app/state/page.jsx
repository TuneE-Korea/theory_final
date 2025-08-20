"use client";
import { Trash2 } from "lucide-react";
import { useState } from "react";
const Page = () => {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  const addTodo = () => {
    setArr((prev) => [...prev, input]);
  };
  const removeTodo = (idx) => {
    setArr((prev) => {
      delete prev[idx];
      return [...prev];
    });
  };
  return (
    <>
      <div className="flex gap-2">
        <input
          onChange={(e) => setInput((prev) => e.target.value)}
          className="bg-sky-200"
          placeholder="오늘 할일 입력"
          type="text"
        />
        <button onClick={addTodo} className="bg-red-100 rounded-full p-1">
          등록
        </button>
      </div>
      <div>
        <span>오늘 해야할 일</span>
        <div className="bg-amber-100 w-fit flex flex-col">
          {arr.map((x, i) => (
            <div key={i} className="flex gap-2 items-center justify-between">
              <span>{x}</span>
              <Trash2
                className="cursor-pointer text-red-500"
                // filter 써야함
                onClick={() => removeTodo(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
// 스테이트를 몇 개 선언해야할지 설계하고 들어가야할듯
// 등록이 될때마다 줄바뀜이 되도록 ...?
// ㄴ 배열로 어떻게 만들지? 줄바꿈 문자를 누적하는 방식은 별로 좋지 않아 보인다.
// 지금 코드 결과는 등록을 누를때마다 값이 초기화되지만, 기존의 입력들이 유지되도록 ...? -> 해결 완료
// 리액트 리렌더링 원칙 공부하기 !!
