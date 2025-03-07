import React, { useState } from "react";

const CommentForm = ({ addComment }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addComment(input);
    setInput("");
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a comment..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default CommentForm;
