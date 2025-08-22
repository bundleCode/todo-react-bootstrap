import { createContext } from "react";

// 1. Create context
export const TodosContext = createContext({
  todoS: [],
  addTodoItem: () => {},
  delTodoItem: () => {},
});
