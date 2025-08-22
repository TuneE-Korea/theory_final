"use client";
import { Trash2 } from "lucide-react";
import { useState } from "react";
const Todo1 = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <>
      <div className="flex flex-col gap-2">
        <div>
          <input
            onChange={(e) => setInput((prev) => e.target.value)}
            className="border-2 border-red-500"
            type="text"
            placeholder="TODO 입력"
          />
          <button
            onClick={() => setTodo((prev) => [...prev, input])}
            className="border-2 border-blue-500"
          >
            등록하기
          </button>
        </div>
        <div>Todo List</div>
        {todo.map((x, i) => (
          <div className="flex items-center" key={i}>
            <span>{x}</span>
            {
              <Trash2
                onClick={() =>
                  setTodo((prev) => [...prev].filter((item, idx) => i != idx))
                }
              />
            }
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo1;
// 콜백 함수 주의사항
// ☐ map 콜백은 항상 JSX를 반환해야 한다.

// ☐ 암시적 반환: => ( <JSX /> )

// ☐ 명시적 반환: => { return <JSX /> }
