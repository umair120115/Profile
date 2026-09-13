import React from 'react';

export default function VideoEmbed({ url, title }) {
  return (
    <div className="video-responsive-wrapper">
      <iframe
        src={url}
        title={title || "Project Video Demonstration"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="video-iframe"
      />
    </div>
  );
}
