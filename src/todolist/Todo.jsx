import { Trash2 } from "lucide-react";
const Todo = (props) => {
  return (
    <>
      <div className="flex items-center">
        <span>{props.todo}</span>
        {<Trash2 onClick={props.click} />}
      </div>
    </>
  );
};

export default Todo;
