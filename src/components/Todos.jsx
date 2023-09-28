import { useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className="mt-4 text-white">
      {todos.map((todo) => (
        <div
          className="flex gap-3 mt-3 items-center w-[800px] justify-center"
          key={todo.id}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(completeTodo(todo.id))}
          />
          <p className={todo.completed ? "line-through" : "none"}>
            {todo.text}
          </p>
          <p
            className="cursor-pointer"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            <BsFillTrashFill />
          </p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
