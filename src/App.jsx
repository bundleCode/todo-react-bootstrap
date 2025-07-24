import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ItemContainer from "./components/ItemContainer";

function App() {
  const aList = [
    { id: 1, name: "Buy Coffee", dueDate: "10/12/2024" },
    { id: 2, name: "Go to College", dueDate: "10/12/2024" },
  ];
  return (
    <>
      <header className="bg-success p-5 w-100 bg-primary py-3">
        <AppName />
      </header>
      <div className="container text-start mt-5">
        <AddTodo />
        <ItemContainer todoList={aList} />
      </div>
    </>
  );
}

export default App;
