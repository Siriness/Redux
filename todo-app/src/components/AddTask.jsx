import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice";
import { PlusCircle } from "lucide-react";

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription.trim()) {
      dispatch(addTask(taskDescription));
      setTaskDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-2 mb-4 p-4 bg-pink-soft rounded-lg shadow-md"
    >
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow p-2 rounded-md border-2 border-pink-medium focus:outline-none focus:ring-2 focus:ring-pink-dark font-cute"
      />
      <button
        type="submit"
        className="bg-pink-medium hover:bg-pink-dark transition-colors duration-300 text-white p-2 rounded-full"
      >
        <PlusCircle />
      </button>
    </form>
  );
};

export default AddTask;
