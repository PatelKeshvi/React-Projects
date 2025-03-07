import React, { useState } from "react";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import "./App.css";

const App = () => {
  const [comments, setComments] = useState([]);

  const addComment = (text) => {
    const newComment = { id: Date.now(), text };
    setComments([newComment, ...comments]);
  };

  return (
    <div className="container">
      <h1>Comment Section</h1>
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} />
    </div>
  );
};

export default App;
