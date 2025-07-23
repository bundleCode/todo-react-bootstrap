import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

import "./App.css";

function App() {
  return (
    <div className="vh-100">
      <header className="bg-success p-5 w-100 bg-primary py-3">
        <AppName />
      </header>
      <div class="container text-start mt-5">
        <AddTodo />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
