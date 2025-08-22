import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ItemContainer from "./components/ItemContainer";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./App.module.css";
import "./App.css";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoProvider from "./store/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <header className="bg-success p-5 w-100 bg-primary py-3">
        <AppName appName="React Bootstrap Todo App" />
      </header>
      <div className={`${styles["my-container"]} text-start mt-5`}>
        <AddTodo />
        <WelcomeMsg msg="Enjoy your Day!" />
        <ItemContainer />
      </div>
    </TodoProvider>
  );
}

export default App;
