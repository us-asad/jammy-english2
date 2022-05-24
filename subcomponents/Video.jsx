import { useState, useEffect, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export default function Video({ additionalStyles, videoLink }) {
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
    if (additionalStyles) {
      setVideoSize({height: videoRef.current?.offsetHeight, width: videoRef.current?.offsetWidth})
      if (typeof window !== "undefined") {
        window.addEventListener('resize', () => {
          setVideoSize({height: videoRef.current?.offsetHeight, width: videoRef.current?.offsetWidth})
        });
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center relative">
      {additionalStyles && <div style={{width: videoSize.width, height: videoSize.height}} />}
      <div className={`w-full ${additionalStyles && "absolute top-[50px]"}`}>
        <video
          src={videoLink}
          type="video/mp4"
          ref={videoRef}
          className="group rounded-[16px] w-full"
        >Your Browser Cannot Support this video please try with another browser</video>
        <button
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[23px] md:text-[38px] text-white hover:text-black customTransition w-12 h-12 md:w-16 md:h-16 bg-main rounded-full flex justify-center items-center ${playVideo ? "opacity-40" : ""}`}
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