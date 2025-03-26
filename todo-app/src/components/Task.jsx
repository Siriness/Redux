import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Edit2, Trash2, CheckCircle2 } from "lucide-react";
import { toggleTask, editTask, deleteTask } from "../redux/todoSlice";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing && editedDescription.trim()) {
      dispatch(editTask({ id: task.id, description: editedDescription }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div
      className={`flex items-center space-x-2 p-3 rounded-lg mb-2 transition-all duration-300 
        ${
          task.isDone
            ? "bg-green-100 line-through text-gray-500"
            : "bg-pink-soft hover:bg-pink-medium/30"
        }`}
    >
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="flex-grow p-1 rounded-md border border-pink-medium font-cute"
        />
      ) : (
        <span className="flex-grow font-cute">{task.description}</span>
      )}

      <div className="flex space-x-2">
        <button
          onClick={() => dispatch(toggleTask(task.id))}
          className={`text-green-500 hover:text-green-700 ${
            task.isDone ? "text-green-700" : ""
          }`}
        >
          <CheckCircle2 />
        </button>
        <button
          onClick={handleEdit}
          className="text-pink-dark hover:text-pink-medium"
        >
          <Edit2 />
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default Task;
