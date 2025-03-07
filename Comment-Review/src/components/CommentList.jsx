import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="comment">
            {comment.text}
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;
