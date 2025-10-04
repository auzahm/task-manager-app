import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const TaskItem = ({ task, onTaskUpdated }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const toggleComplete = async () => {
    try {
      await axios.put(`/api/tasks/${task._id}`, {
        completed: !task.completed,
      });

      toast.success(task.completed ? "Marked incomplete" : "Marked complete");
      onTaskUpdated();
    } catch (err) {
      console.error(err);
      toast.error("Error updating task");
    }
  };

  const saveEdit = async () => {
    if (!newTitle.trim()) return;
    try {
      await axios.put(`/api/tasks/${task._id}`, {
        title: newTitle,
      });
      setIsEditing(false);
      toast.info("Task updated");
      onTaskUpdated();
    } catch (err) {
      console.error(err);
      toast.error("Error updating task");
    }
  };

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${task._id}`);
      toast.error("Task deleted");
      onTaskUpdated();
    } catch (err) {
      console.error(err);
      toast.error("Error deleting task");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      layout
      className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 mb-2 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
    >
      <div className="flex items-center space-x-3 flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleComplete}
          className="w-5 h-5"
        />
        {isEditing ? (
          <input
            type="text"
            className="flex-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          <span
            className={`text-gray-800 dark:text-gray-200 ${task.completed ? "line-through text-gray-400 dark:text-gray-400" : ""
              }`}
          >
            {task.title}
          </span>
        )}
      </div>

      <div className="flex space-x-2">
        {isEditing ? (
          <button
            onClick={saveEdit}
            className="text-green-500 hover:text-green-700 font-semibold"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-yellow-500 hover:text-yellow-700 font-semibold"
          >
            Edit
          </button>
        )}
        <button
          onClick={deleteTask}
          className="text-red-500 hover:text-red-700 font-semibold"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default TaskItem;
