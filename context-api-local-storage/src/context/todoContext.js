import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[{
      id: Date.now(),
      todo: "foo",
      completed: false,
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    setComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
