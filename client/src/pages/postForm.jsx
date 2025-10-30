// src/pages/PostForm.jsx
import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("bg-blue-200");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/posts", { title, content, color });
      alert("Post saved successfully!");
      setTitle("");
      setContent("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center bg-purple-100 min-h-screen p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 flex flex-col gap-4 shadow-lg"
        style={{
          width: "60%",      // reduced width
          maxWidth: "600px", // max width so it doesn't stretch too much
          minWidth: "350px", // keeps it usable on smaller screens
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create a New Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={6}
          required
        />
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="bg-blue-200">Blue</option>
          <option value="bg-green-200">Green</option>
          <option value="bg-yellow-200">Yellow</option>
          <option value="bg-red-200">Red</option>
          <option value="bg-purple-200">Purple</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 font-semibold transition"
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
