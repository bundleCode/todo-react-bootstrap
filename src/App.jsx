import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ItemContainer from "./components/ItemContainer";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./App.module.css";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  const initialTodos = [
    // { id: 1, name: "Buy Coffee", dueDate: "10/12/2024" },
    // { id: 2, name: "Go to College", dueDate: "10/12/2024" },
  ];
  const [todoS, setTodoS] = useState(initialTodos);

  const handleTodos = (todoName, todoDate) => {
    if (todoName && todoDate) {
      let randId = Math.floor(Math.random() * 9999 + 1);
      //updating state based on the previous state as react may not update the current value due to its asynchronous nature.
      setTodoS((currentTodoS) => [
        ...currentTodoS,
        { id: randId, name: todoName, dueDate: todoDate },
      ]);
    }
  };

  const handleDelTodos = (id) => {
    //updating state based on the previous state as react may not update the current value due to its asynchronous nature.
    setTodoS((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <header className="bg-success p-5 w-100 bg-primary py-3">
        <AppName appName="React Bootstrap Todo App" />
      </header>
      <div className={`${styles["my-container"]} text-start mt-5`}>
        <AddTodo handleAddtodo={handleTodos} />
        <WelcomeMsg todoList={todoS} msg="Enjoy your Day!" />
        <ItemContainer todoList={todoS} handleDelTodos={handleDelTodos} />
      </div>
    </>
  );
}

export default App;
