import React, { useState } from "react";
import API from "../utils/api";

const CreateTask = ({ onTaskCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/tasks", { title, description });
      onTaskCreated(res.data); // pass new task to parent
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error creating task", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-3">Create New Task</h2>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
        required
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
        rows="3"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default CreateTask;
