import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTask, editingTask }) => {
  const [task, setTask] = useState({ name: "", description: "" });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    } else {
      setTask({ name: "", description: "" });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name || !task.description) {
      alert("Both fields are required.");
      return;
    }
    if (editingTask) {
      editTask({ ...task, id: editingTask.id });
    } else {
      addTask({ ...task, id: Date.now(), completed: false });
    }
    setTask({ name: "", description: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 bg-white shadow-lg p-6 rounded-md mb-6"
    >
      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={task.name}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md "
      />
      <input
        type="text"
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md "
      />
      <button
        type="submit"
        className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600 "
      >
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
