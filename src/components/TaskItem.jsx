import React from "react";

const TaskItem = ({ task, setEditingTask, deleteTask, toggleCompletion }) => {
  return (
    <div
      className={`flex items-start justify-between p-4 bg-white rounded-md shadow-md ${
        task.completed ? "opacity-50" : ""
      }`}
    >
      <div>
        <h3 className="text-lg font-bold">{task.name}</h3>
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => toggleCompletion(task.id)}
          className={`py-1 px-3 rounded-md text-white ${
            task.completed ? "bg-yellow-500 hover:bg-yellow-600" : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => setEditingTask(task)}
          className="py-1 px-3 rounded-md bg-green-500 text-white hover:bg-green-600"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="py-1 px-3 rounded-md bg-red-500 text-white hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
