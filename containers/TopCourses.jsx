import data from "data/top-courses.json";
import { TopCourseCard } from "components";
import Carousel from "react-multi-carousel"

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

const arrowIcon = isRightArrow => (<span className={`absolute transition duration-200 flex items-center px-5 cursor-pointer h-full main_color z-20 text-4xl ${isRightArrow ? "right-1 sm:right-10" : "left-1 sm:left-10"}`}>{isRightArrow ? "❯" : "❮"}</span>);

export default function TopCourses() {
  return (
    <section id="top-courses" className="section-banner">
      <div className="xl:container xl:mx-auto pt-[130px] lg:pt-40 dots-bg relative">
        <p className="absolute top-[60px] lg:top-[90px] left-[50px] xl:left-auto text-[20px] font-rubik font-medium after:w-[70%] after:h-[1px] after:absolute after:-bottom-1 after:left-0 after:bg-black">Top Courses</p>
        <div className="relative customCarouselForRecentPosts">
          <Carousel
            infinite
            customRightArrow={arrowIcon(true)}
            customLeftArrow={arrowIcon(false)}
            responsive={responsive}
            className="pb-20"
            itemClass="px-7"
          >
            {data.top_courses.map(course => <TopCourseCard key={course.button.link} {...course} />)}
          </Carousel>
        
      </div>
      </div>
    </section>
  );
}

        // {data.top_courses.map(course => <TopCourseCard key={course.button.link} {...course} />)}
