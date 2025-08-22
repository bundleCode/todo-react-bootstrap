import { useRef, useContext } from "react";
import { MdAddBox } from "react-icons/md";
import { TodosContext } from "../store/todo-context-store";

function AddTodo() {
  const { addTodoItem } = useContext(TodosContext);
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  const inputNameRef = useRef("");
  const inputDateRef = useRef("");

  const handleOnClickAddTodo = (event) => {
    event.preventDefault(); //it prevents the default behaviour of sending data to server via action attribute while submitting the form
    // addTodoItem(todoName, todoDate);
    // setTodoName("");
    // setTodoDate("");
    let todoName = inputNameRef.current.value;
    let todoDate = inputDateRef.current.value;
    addTodoItem(todoName, todoDate);
    inputNameRef.current.value = "";
    inputDateRef.current.value = "";
  };
  return (
    <>
      <form className="row mb-4" onSubmit={handleOnClickAddTodo}>
        <div className="col-6 gx-1">
          <input
            type="text"
            className="form-control rounded-0 border border-secondary"
            placeholder="Enter Todo Here"
            ref={inputNameRef}
            // onChange={(e) => setTodoName(e.target.value)}
            // value={todoName}
          />
        </div>
        <div className="col-4 gx-1">
          <input
            type="date"
            className="form-control rounded-0 border border-secondary"
            ref={inputDateRef}
            // onChange={(e) => setTodoDate(e.target.value)}
            // value={todoDate}
          />
        </div>
        <div className="col-2 text-start">
          <button type="submit" className="btn btn-success width rounded-0">
            {/* <i className="bi bi-plus-circle"></i> */}
            <MdAddBox />
            <span className="d-none d-md-inline">Add</span>
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
