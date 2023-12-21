// Import React
import React from 'react';

// Function for VideoPlayer Component
function VideoPlayer({ video }) {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={video.embedUrl}
        title={video.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

// Export the VideoPlayer Component
export default VideoPlayer;
