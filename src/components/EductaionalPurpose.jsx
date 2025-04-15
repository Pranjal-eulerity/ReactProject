import React, { useState } from 'react';

export const EducationalPurpose = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  const handleAddComment = () => {
    if (!input) return;
    setComments([...comments, input]);
    setInput('');
  };

  return (
    <div style={{ border: '1px solid red', padding: '20px', margin: '20px' }}>
      <h3>💬 Comment Box (Don't use in prod!)</h3>
      <textarea
        rows="3"
        style={{ width: '100%' }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a comment... Try  something 👀"
      />
      <button onClick={handleAddComment}>Post</button>

      <div style={{ marginTop: '20px' }}>
        <h4>All Comments:</h4>
        {comments.map((c, i) => (
          <div
            key={i}
            dangerouslySetInnerHTML={{ __html: c }}
            style={{ padding: '10px', background: '#f9f9f9', marginBottom: '10px' }}
          />
        ))}
      </div>
    </div>
  );
};
