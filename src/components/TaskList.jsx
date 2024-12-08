import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setEditingTask, deleteTask, toggleCompletion }) => {
  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            setEditingTask={setEditingTask}
            deleteTask={deleteTask}
            toggleCompletion={toggleCompletion}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
