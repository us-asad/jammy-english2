import Image from "next/image";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

export default function Video({ video }) {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  const switchVideo = () => {
    setPlayVideo(prev => !prev);

    if (playVideo) {
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
      <div className="w-full group">
        <div className={`absolute inset-0 z-[9] ${playVideo ? "hidden" : ""}`}>
          <Image
            src="/video-thumbnail.jpg"
            alt="esl jam"
            layout="fill"
            objectFit="contain"
            className="rounded-[16px]"
          />
        </div>
        <video
          src={video?.url}
          type="video/mp4"
          ref={videoRef}
          className="rounded-[16px] w-full"
        >Your Browser Cannot Support this video please try with another browser</video>
        <button
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[11] text-[23px] md:text-[38px] text-white customTransition w-12 h-12 md:w-16 md:h-16 bg-main rounded-full flex justify-center items-center hover:opacity-100 ${playVideo ? "opacity-0 group-hover:opacity-40" : ""}`}
          onClick={switchVideo}
        >
          {!playVideo && <span className="animate-ping absolute z-10 left-[7px] md:left-[8px] text-0 md:text-[38px] text-white customTransition w-[35px] h-[35px] md:w-[50px] md:h-[50px] bg-main rounded-full"></span>}

          {playVideo
            ? <BsPauseFill className="absolute z-[11]" />
            : <BsFillPlayFill className="absolute z-[11]" />
          }
        </button>
      </div>
    </div>
  );
}