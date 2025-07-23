import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function AddTodo() {
  return (
    <>
      <div class="row mb-3">
        <div class="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Here"
          />
        </div>
        <div class="col-4">
          <input type="date" className="form-control" />
        </div>
        <div class="col-2 text-start">
          <button type="button" className="btn btn-success px-4 py-2 width">
            <FontAwesomeIcon icon={faPlus} /> Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
