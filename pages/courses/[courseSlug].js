import { useState, useEffect, useRef } from "react";
import { getAllCourses, getCourse } from "services";
import { Header, Footer } from "containers";
import { TopCourseCard } from "components";
import { YTVideo, SEO } from "subcomponents";

export default function Course({ allCourses, course, metaData }) {
  const [videoSize, setVideoSize] = useState(0);
  const videoRef = useRef(null);

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
      <SEO title={`${course?.name} Course by ${metaData.mainName}`} description={`${course?.name} Course. Learn for free at ${metaData.mainName}`} />
      <div
        className="bg-img-configs pt-[85px] -mb-3 sm:px-10 lg:pt-[125px] px-10 bg-fixed relative"
        style={{backgroundImage: `url(${course?.thumbnail?.url})`}}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-[#0000009e] z-[2]" />
        <div className="flex justify-center items-center flex-col z-[5] w-full text-white relative">
          <Header metaData={metaData} dataAos="fade-down" allCourses={allCourses} bgDark />
          <h2 data-aos="fade-up" className="font-rubik text-[25px] sm:text-[35px] lg:text-[42px] font-medium">{course?.name}</h2>
          <div style={{width: videoSize?.width, height: videoSize?.height}} />
          <YTVideo
            dataAos="fade-up"
            videoId={course?.youtubeVideoId}
            className="sm:w-[550px] sm:h-[320px] md:w-[650px] md:h-[350px] lg:w-[750px] xl:w-[850px] lg:h-[400px] rounded-[19px] top-[62px] sm:top-[90px] lg:top-[105px] absolute"
            ref={videoRef}
          />
        </div>
      </div>
      <div className="section-banner mt-[10px]">
        <div className="container dots-bg courses-dots-bg mx-auto px-10 pt-[100px] pb-10 flex flex-wrap justify-around space-y-10 space-x-2 relative">
          <h4 data-aos="fade-left" style={{wordSpacing: "6px"}} className="absolute font-rubik top-[60px] lg:top-[80px] left-[10%] translate-x-[-50%] md:translate-x-0 md:left-[73px] text-[20px] font-rubik font-medium after:w-[82%] after:h-[1px] after:absolute after:-bottom-1 after:left-0 after:bg-black">
            {course?.lessons?.length} lesson{course?.lessons?.length > 1 ? "s" : ""}
          </h4>
          {course?.lessons?.map(lesson => (
            <div
              key={lesson?.slug}
              className="w-[360px] first:mt-10"
            >
              <TopCourseCard dataAos="fade-up" metaData={lesson?.timeOfVideo} mainSlug={`${course?.slug}/lessons`} isReady={true} {...lesson} btnName="Start Lesson" />
            </div>
          ))}
        </div>
      </div>
      <Footer metaData={metaData} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const result = await getCourse(context.params.courseSlug);
  const allCourses = await getAllCourses();

  if (!result?.course || !result?.course?.isReady) return {
    notFound: true
  }

  return {
    props: {
      allCourses,
      course: result?.course,
      metaData: result?.metaDatas[0]
    }
  }
}
