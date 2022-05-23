import React from "react";

const YTVideo = React.forwardRef((props, ref ) => {
  return (
    <iframe
      width="350"
      height="200"
      ref={ref && ref}
      src={`https://www.youtube.com/embed/${props.videoId}`}
      title="youtube video watch and relax!"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={props.className}
    ></iframe>
  );
});

export default YTVideo;