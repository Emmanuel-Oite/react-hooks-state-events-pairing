import React, { useState } from 'react';
import videoData from '../data/video';
import VideoPlayer from './VideoPlayer';
import VideoDetails from './VideoDetails';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

function App() {
  const [upvotes, setUpvotes] = useState(videoData.upvotes);
  const [downvotes, setDownvotes] = useState(videoData.downvotes);
  const [showComments, setShowComments] = useState(true);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  return (
    <div>
      <VideoPlayer video={videoData} />
      <VideoDetails
        upvotes={upvotes}
        downvotes={downvotes}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
        onToggleComments={toggleComments}
        showCommentsProp={true}
      />
      {showComments && <CommentList comments={videoData.comments} />}
      {showComments && <CommentForm />}
    </div>
  );
}

export default App;
