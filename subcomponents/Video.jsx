export default function Video({ video }) {
  return (
    <div className="flex justify-center items-center relative">
      <div className="w-full">
        <video
          src={video?.url}
          type="video/mp4"
          className="group rounded-[16px] w-full"
          autoPlay="autoplay"
          loop
          muted
        >Your Browser Cannot Support this video please try with another browser</video>
      </div>
    </div>
  );
}