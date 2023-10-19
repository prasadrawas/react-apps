import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  const [todoMsg, setTodoMsg] = useState("");
  const dispatch = useDispatch();

  const submitTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoMsg));
    setTodoMsg("");
  };

  return (
    <form action="" onSubmit={submitTodo} className="space-x-3">
      <input
        type="text"
        placeholder="Enter todo task"
        className="p-3 rounded-md shadow-sm bg-slate-100 text-xs"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <input type="submit" value="Save TODO" className="bg-green-600 rounded-md text-white p-2 cursor-pointer" />
    </form>
  );
}
