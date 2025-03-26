import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "../components/Task";
import { setFilter } from "../redux/todoSlice";

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "undone") return !task.isDone;
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-center space-x-4 mb-4">
        {["all", "done", "undone"].map((filterType) => (
          <button
            key={filterType}
            onClick={() => dispatch(setFilter(filterType))}
            className={`px-4 py-2 rounded-full font-cute transition-colors duration-300 
              ${
                filter === filterType
                  ? "bg-pink-dark text-white"
                  : "bg-pink-soft text-pink-dark hover:bg-pink-medium"
              }`}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </button>
        ))}
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500 font-cute">No tasks found</p>
      ) : (
        filteredTasks.map((task) => <Task key={task.id} task={task} />)
      )}
    </div>
  );
};

export default ListTask;
