"use client";

import { useState } from "react";
import TodoList from "@/todolist/TodoList";
const Page = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <>
      <TodoList />
      <br></br>
      <TodoList />
      <br></br>
      <TodoList />
    </>
  );
};

export default Page;
