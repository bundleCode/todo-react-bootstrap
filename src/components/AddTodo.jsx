import { useState } from "react";

function AddTodo({ handleAddtodo }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleOnClickAddTodo = () => {
    handleAddtodo(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };
  return (
    <>
      <div className="row mb-4">
        <div className="col-6 gx-1">
          <input
            type="text"
            className="form-control rounded-0 border border-secondary"
            placeholder="Enter Todo Here"
            onChange={(e) => setTodoName(e.target.value)}
            value={todoName}
          />
        </div>
        <div className="col-4 gx-1">
          <input
            type="date"
            className="form-control rounded-0 border border-secondary"
            onChange={(e) => setTodoDate(e.target.value)}
            value={todoDate}
          />
        </div>
        <div className="col-2 text-start">
          <button
            type="button"
            className="btn btn-success width rounded-0"
            onClick={handleOnClickAddTodo}
          >
            <i className="bi bi-plus-circle"></i>
            <span className="d-none d-md-inline">Add</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
