import data from "data/main.json";
import { TopCourseCard } from "components";
import Carousel from "react-multi-carousel";
import { DecorationImg } from "subcomponents";
import { shape7, shape9, shape11 } from "assets";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1200, min: 900 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1
  }
};

const arrowIcon = isRightArrow => (<span className={`absolute transition duration-200 flex items-center px-5 cursor-pointer h-full text-main z-20 text-4xl ${isRightArrow ? "right-1 sm:right-10" : "left-1 sm:left-10"}`}>{isRightArrow ? "❯" : "❮"}</span>);

export default function TopCourses({ topCourses }) {
  if (topCourses?.length < 3) return <></>;

  return (
    <section id="top-courses" className="section-banner relative">
      <div className="xl:container xl:mx-auto pt-[130px] lg:pt-40 dots-bg relative z-10">
        <p data-aos="fade-right" className="absolute top-[60px] lg:top-[90px] left-[50px] xl:left-auto text-[20px] lg:ml-5 font-rubik font-medium after:w-[70%] after:h-[1px] after:absolute after:-bottom-1 after:left-0 after:bg-black">{data.top_courses.title}</p>
        <div className="relative customCarouselForRecentPosts">
          <Carousel
            infinite
            customRightArrow={arrowIcon(true)}
            customLeftArrow={arrowIcon(false)}
            responsive={responsive}
            className="pb-20"
            itemClass="px-7"
          >
            {topCourses?.slice(0, 3).map(course => <TopCourseCard key={course?.slug} dataAos="zoom-in" metaData={`${course?.lessons?.length} lessons`} mainSlug="courses" btnName="Start Course" isCourse {...course} />)}
          </Carousel>
        </div>
      </div>
      <div>
        <DecorationImg dataAos="zoom-in" img={shape7} className="bottom-[30px] left-[20%]" />
        <DecorationImg dataAos="zoom-in" img={shape11} className="top-[30px] left-32 !opacity-50" />
        <DecorationImg dataAos="zoom-in" img={shape9} className="2xl:bottom-[30px] bottom-3 right-10" />
      </div>
    </section>
  );
}
