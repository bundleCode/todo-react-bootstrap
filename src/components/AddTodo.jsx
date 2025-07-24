import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function AddTodo() {
  return (
    <>
      <div className="row mb-3">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" className="form-control" />
        </div>
        <div className="col-2 text-start">
          <button type="button" className="btn btn-success p2 px-4">
            <FontAwesomeIcon icon={faPlus} /> Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
