import { useState } from "react";
import { TodosContext } from "./todo-context-store";

const TodoProvider = ({ children }) => {
  const initialTodos = [
    // { id: 1, name: "Buy Coffee", dueDate: "10/12/2024" },
    // { id: 2, name: "Go to College", dueDate: "10/12/2024" },
  ];

  const [todoS, setTodoS] = useState(initialTodos);

  const addTodoItem = (todoName, todoDate) => {
    if (todoName && todoDate) {
      let randId = Math.floor(Math.random() * 9999 + 1);
      //updating state based on the previous state as react may not update the current value due to its asynchronous nature.
      setTodoS((currentTodoS) => [
        ...currentTodoS,
        { id: randId, name: todoName, dueDate: todoDate },
      ]);
    }
  };

  const delTodoItem = (id) => {
    //updating state based on the previous state as react may not update the current value due to its asynchronous nature.
    setTodoS((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider
      value={{
        todoS,
        addTodoItem,
        delTodoItem,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodoProvider;
