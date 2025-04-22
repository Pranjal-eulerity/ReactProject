import React from 'react';
import { capitalize, formatDate } from '../utility';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <strong>{capitalize(comment.author)}</strong> said:
      <p>{capitalize(comment.text)}</p>
      <small>{formatDate(new Date(comment.date))}</small>
    </div>
  );
};

export default Comment;
