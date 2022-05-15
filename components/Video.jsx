import { useState, useEffect, useRef } from "react";
import data from "data/main.json";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export default function Video() {
  const [playVideo, setPlayVideo] = useState(false);
  const [videoSize, setVideoSize] = useState(0);
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
    if (typeof window !== "undefined") {
      window.addEventListener('resize', () => {
        setVideoSize({height: videoRef.current.offsetHeight, width: videoRef.current.offsetWidth})
      });
    }
  }, []);
        console.log(videoRef.current)

  return (
    <div className="flex justify-center items-center relative">
      <div style={{width: videoSize.width, height: videoSize.height}} />
      <div className="w-full absolute top-[50px]">
        <video
          src={data.main_banner.video.link}
          type="video/mp4"
          ref={videoRef}
          className="group rounded-[16px] w-full"
        >Your Browser Cannot Support this video please try with another browser</video>
        <button
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[23px] md:text-[38px] hover:text-black customTransition w-12 h-12 md:w-16 md:h-16 main_bg rounded-full flex justify-center items-center ${playVideo ? "opacity-40" : ""}`}
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