import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ItemContainer from "./components/ItemContainer";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./App.module.css";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodosContext } from "./store/todo-context-store";

function App() {
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
      <header className="bg-success p-5 w-100 bg-primary py-3">
        <AppName appName="React Bootstrap Todo App" />
      </header>
      <div className={`${styles["my-container"]} text-start mt-5`}>
        <AddTodo />
        <WelcomeMsg msg="Enjoy your Day!" />
        <ItemContainer />
      </div>
    </TodosContext.Provider>
  );
}

export default App;
