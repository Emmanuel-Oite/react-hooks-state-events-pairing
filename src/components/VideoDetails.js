import React, { useState } from 'react';

const VideoDetails = ({ showCommentsProp }) => {
  const [showComments, setShowComments] = useState(showCommentsProp);

  const toggleComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };

function VideoDetails({ upvotes, downvotes, onUpvote, onDownvote, onToggleComments }) {
  return (
    <div>
      <h2>{upvotes} 👍</h2>
      <h2>{downvotes} 👎</h2>
      <button onClick={onUpvote}>👍</button>
      <button onClick={onDownvote}>👎</button>
      <button onClick={onToggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
    </div>
  );
}
};


export default VideoDetails;
