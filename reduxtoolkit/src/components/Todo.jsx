import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos.length);

  return (
    <div>
      <h1>Todos: {todos.length}</h1>
      {todos.map((item) => (
        <div key={item.id} className="flex ">
            <p>{item.name}</p>
            <div className="text-red-500 cursor-pointer px-2" onClick={() => dispatch(deleteTodo(item.id))}>X</div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
