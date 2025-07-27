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
      const newTodos = [
        ...todoS,
        { id: randId, name: todoName, dueDate: todoDate },
      ];
      setTodoS(newTodos);
    }
  };

  const handleDelTodos = (id) => {
    const newTodos = todoS.filter((todo) => todo.id !== id);
    setTodoS(newTodos);
  };

  return (
    <>
      <header className="bg-success p-5 w-100 bg-primary py-3">
        <AppName appName="React Bootstrap Todo App" />
      </header>
      <div className={`${styles["my-container"]} text-start mt-5`}>
        <AddTodo handleAddtodo={handleTodos} />
        {!todoS.length && <WelcomeMsg msg="Enjoy your day!" />}
        <ItemContainer todoList={todoS} handleDelTodos={handleDelTodos} />
      </div>
    </>
  );
}

export default App;
