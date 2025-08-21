import Todo from "@/todolist/Todo";
const List = (props) => {
  return (
    <>
      <div>Todo List</div>
      {props.todolist.map((x, i) => (
        <Todo
          key={i}
          todo={x}
          click={() =>
            props.click((prev) => [...prev].filter((_, idx) => i != idx))
          }
        />
      ))}
    </>
  );
};

export default List;
