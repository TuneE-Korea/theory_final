"use client";

import { useState } from "react";
import Register from "@/todolist/Register";
import List from "@/todolist/List";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <>
      <Register
        change={(e) => setInput((prev) => e.target.value)}
        registration={() => setTodo((prev) => [...prev, input])}
      />
      <List todolist={todo} click={setTodo} />
    </>
  );
};

export default TodoList;
// List 안의 props 중, click에 ((prev) => [...prev].filter((_, idx) => i != idx)) 로 했었는데 i의 스코프 문제로 에러가 났었다.
