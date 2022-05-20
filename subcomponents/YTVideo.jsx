import React from "react";
import data from "data/lesson.json";

const YTVideo = React.forwardRef((props, ref ) => {
  return (
    <iframe
      width="350"
      height="200"
      ref={ref && ref}
      src={`https://www.youtube.com/embed/${data.youtube_video_id}`}
      title="youtube video watch and relax!"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={props.className}
    ></iframe>
  );
});

export default YTVideo;