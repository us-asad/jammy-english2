import { useState } from "react";
import { useRouter } from "next/router";
import parser from "html-react-parser";
import { getAllCourses, getLessonAndCourse } from "services";
import data from "data/main.json";
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Header, LessonSideBar, Footer } from "containers";
import { YTVideo, SEO } from "subcomponents";

const nextPreviousLessonsClassNames = hasOtherPage => `flex items-center space-x-1.5 text-[12.312px] md:text-[13.5px] text-main customTransition ${!hasOtherPage ? "text-gray-300 pointer-events-none": "group hover:text-purple-800"}`;
const arrowClassNames = isNext => `text-[15px] customTransition ${isNext ? "group-hover:pl-1" : "group-hover:pr-1"}`;

export default function Lesson({ allCourses, lesson, course, metaDatas }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const router = useRouter();
  const lessonIdx = course?.lessons?.findIndex(({slug}) => slug === lesson?.slug);
  const metaData = metaDatas[0];

  let switchShowSB = () => setShowSideBar(prev => !prev);

  return (
    <div>
      <SEO title={`${lesson?.name} of ${course.name} Course by Jammy English`} description={`${lesson?.name} of ${course.name} Course. Learn for free at Jammy English Club`} />
      <div className="h-[70px] bg-dark">
        <Header allCourses={allCourses} bgLight />
      </div>
      <div className="relative fixed-container min-h-screen">
        <LessonSideBar switchShowSB={switchShowSB} showSideBar={showSideBar} course={course} />
        <div className={`customTransition ${showSideBar ? "md:ml-[350px]" : "md:ml-[69px]"}`}>
          <span
            className={`inline-block md:hidden bg-blue-500 p-[4px] rounded-full cursor-pointer mt-[11px] ml-[11px] customTransition ${showSideBar && "rotate-180"}`}
            onClick={switchShowSB}
          >
            <MdOutlineArrowBackIos className="text-[22px] text-white font-semibold" />
          </span>
          <div className="xl:mx-auto pb-[50px] px-[24.624px] sm:px-[49.248px] md:px-[54px] lg:px-[90px] pt-0 md:pt-[20px] max-w-[960px]">
            <h2 className="text-[30px] md:text-[40px] font-poppins font-semibold mb-[15px] md:mb-6">{lesson?.name}</h2>
            <div className="flex space-x-2 mb-[18px] bg-[#f0f3f6] rounded-[6px] py-[9px] px-[18px] text-[13.5px] font-bold font-rubik text-blue-500">
              <Link href={`/courses/${course?.slug}`}>
                <a className="w-auto line-clamp-1 ">{course?.name}</a>
              </Link>
              <span className="font-sans-serif font-normal text-black">&#62;</span>
              <p className="w-auto line-clamp-1">{lesson?.name}</p>
            </div>
            <div className="iframe-container">
              <YTVideo videoId={lesson?.youtubeVideoId} />
            </div>
            <div className="prose prose-p:font-rubik my-7 min-w-full">
              {parser(lesson?.description?.html)}
            </div>
            <div className="border-t-2 border-b-[#e2e7ed]">
              <div className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 text-center pt-3 pb-5">
                <Link href={lesson?.pdfForStudents?.url}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="p-3 bg-main rounded-lg text-[13px] md:text-[13.5px] text-white font-rubik font-medium customTransition hover:bg-indigo-500"
                  >{metaData?.downloadForStudentsText}</a>
                </Link>
                <Link href={lesson?.pdfForTeachers?.url}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="p-3 bg-main rounded-lg text-[13px] md:text-[13.5px] text-white font-rubik font-medium customTransition hover:bg-indigo-500"
                  >{metaData?.downloadForTeachersText}</a>
                </Link>
              </div>
              <div className="flex justify-between">
                <Link href={`/${course?.slug}/lessons/${course?.lessons?.length && course.lessons[lessonIdx - 1]?.slug}`}>
                  <a className={nextPreviousLessonsClassNames(course?.lessons?.length && course.lessons[lessonIdx - 1]?.slug)}>
                    <HiOutlineArrowNarrowLeft className={arrowClassNames(0)} />
                    <span>{data.lesson.previous_btn_name}</span>
                  </a>
                </Link>
                <Link href={`/${course?.slug}/lessons/${course?.lessons?.length && course.lessons[lessonIdx + 1]?.slug}`}>
                  <a className={nextPreviousLessonsClassNames(course?.lessons?.length && course.lessons[lessonIdx + 1]?.slug)}>
                    <span>{data.lesson.next_btn_name}</span>
                    <HiOutlineArrowNarrowRight className={arrowClassNames(1)} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer metaData={metaData} />
    </div>
  );
}

export async function getServerSideProps({ params: { courseSlug, lessonSlug } }) {
  const allCourses = await getAllCourses();
  const result = await getLessonAndCourse(courseSlug, lessonSlug);

  if (!result?.course || !result?.lesson) return {
    notFound: true
  }

  return {
    props: {
      allCourses,
      ...result
    }
  }
}