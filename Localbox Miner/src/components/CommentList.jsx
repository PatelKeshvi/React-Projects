import React from "react";

const CommentList = ({ comments, onDeleteComment }) => {
  return (
    <div className="comment-list">
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment} <button onClick={() => onDeleteComment(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
