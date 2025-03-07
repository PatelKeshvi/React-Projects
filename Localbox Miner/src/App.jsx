import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(() => {
    return Number(localStorage.getItem("counter")) || 0;
  });

  const [comments, setComments] = useState(() => {
    return JSON.parse(localStorage.getItem("comments")) || [];
  });

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  const deleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>React LocalStorage App</h1>
      <Counter counter={counter} setCounter={setCounter} />
      <CommentForm onAddComment={addComment} />
      <CommentList comments={comments} onDeleteComment={deleteComment} />
    </div>
  );
};

export default App;
