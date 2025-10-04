import React, { useState } from "react";
import axios from "axios";

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    try {
      await axios.post("/api/tasks", { title });
      onTaskAdded();
      setTitle("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="flex mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
