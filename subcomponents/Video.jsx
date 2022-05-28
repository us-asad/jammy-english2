import { useState, useEffect, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export default function Video({ video }) {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  const switchVideo = () => {
    setPlayVideo(prev => !prev);

    if(playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current?.addEventListener("ended", () => {
        setPlayVideo(false);
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center relative">
      <div className="w-full">
        <video
          src={video?.url}
          type="video/mp4"
          ref={videoRef}
          className="group rounded-[16px] w-full"
        >Your Browser Cannot Support this video please try with another browser</video>
        <button
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[23px] md:text-[38px] text-white hover:text-yellow-400 customTransition w-12 h-12 md:w-16 md:h-16 bg-main rounded-full flex justify-center items-center ${playVideo ? "opacity-40" : ""}`}
          onClick={switchVideo}
        >
          {playVideo
            ? <BsPauseFill />
            : <BsFillPlayFill />
          }
        </button>
      </div>
    </div>
  );
}