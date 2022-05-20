import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import data from "data/courses.json";
import Head from "next/head";
import { Header, Footer } from "containers";
import { TopCourseCard } from "components";
import { YTVideo } from "subcomponents";

export default function Course() {
  const [videoSize, setVideoSize] = useState(0);
  const videoRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setVideoSize({height: videoRef.current?.offsetHeight, width: videoRef.current?.offsetWidth})
    if (typeof window !== "undefined") {
      window.addEventListener('resize', () => {
        setVideoSize({height: videoRef.current?.offsetHeight, width: videoRef.current?.offsetWidth})
      });
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Working Well</title>
      </Head>
      <div
        className="bg-img-configs pt-[85px] -mb-3 px-6 sm:px-10 lg:pt-[125px] px-10 bg-fixed relative"
        style={{backgroundImage: `url(${data.bg_image_link})`}}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-[#0000009e] z-[2]" />
        <div className="flex justify-center items-center flex-col z-[5] w-full text-white relative">
          <Header />
          <h2 className="font-cursive text-[25px] sm:text-[35px] lg:text-[42px] font-medium" >{data.name}</h2>
          <div style={{width: videoSize.width, height: videoSize.height}} />
          <YTVideo className="sm:w-[550px] sm:h-[320px] md:w-[650px] md:h-[350px] lg:w-[750px] xl:w-[850px] lg:h-[400px] rounded-b-[20px] top-[62px] sm:top-[90px] lg:top-[105px] absolute" ref={videoRef} />
        </div>
      </div>
      <div className="section-banner mt-[10px]">
        <div className="container dots-bg courses-dots-bg mx-auto px-10 pt-[100px] pb-10 flex flex-wrap justify-around space-y-10 space-x-2 relative">
          <h4 className="absolute font-cursive top-[60px] lg:top-[80px] left-[50%] translate-x-[-50%] md:translate-x-0 md:left-[73px] text-[20px] font-rubik font-medium after:w-[70%] after:h-[1px] after:absolute after:-bottom-1 after:left-0 after:bg-black">
            {data.lessons.length} lessons
          </h4>
          {data.lessons.map(lesson => (
            <div
              key={lesson.slug.link}
              className="w-[360px] first:mt-10"
            >
              <TopCourseCard metaData={lesson.time} mainSlug={`${router.query.courseSlug}/lessons`} {...lesson} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}