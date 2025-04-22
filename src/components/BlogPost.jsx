import React from 'react';
import { capitalize, formatDate } from '../utility';

const BlogPost = ({ post }) => {
  return (
    <div>
      <h2>{capitalize(post.title)}</h2>
      <p>Published: {formatDate(new Date(post.publishedAt))}</p>
      <p>{capitalize(post.content)}</p>
    </div>
  );
};

export default BlogPost;
