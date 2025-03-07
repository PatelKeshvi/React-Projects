import React, { useState } from "react";

const CommentForm = ({ onAddComment }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddComment(input);
      setInput(""); 
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">💬 Add</button>
    </form>
  );
};

export default CommentForm;
