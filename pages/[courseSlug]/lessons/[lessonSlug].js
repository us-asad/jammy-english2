import { useState } from "react";
import { useRouter } from "next/router";
import parser from "html-react-parser";
import data from "data/lesson.json";
import courseData from "data/courses.json";
import Head from "next/head";
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Header, LessonSideBar, Footer } from "containers";
import { YTVideo } from "subcomponents";

const nextPreviousLessonsClassNames = "group flex items-center space-x-1.5 text-[12.312px] md:text-[13.5px] text-blue-500 customTransition hover:text-blue-400";
const arrowClassNames = isNext => `text-[15px] customTransition ${isNext ? "group-hover:pl-1" : "group-hover:pr-1"}`;

export default function Lesson() {
  const [showSideBar, setShowSideBar] = useState(false);
  const router = useRouter();

  const switchShowSB = () => setShowSideBar(prev => !prev);

  return (
    <div>
      <Head>
        <title>Working Well</title>
      </Head>
      <div className="h-[70px] bg-black">
        <Header />
      </div>
      <div className="relative fixed-container min-h-screen">
        <LessonSideBar switchShowSB={switchShowSB} showSideBar={showSideBar} />
        <div className={`customTransition ${showSideBar ? "md:ml-[350px]" : "md:ml-[69px]"}`}>
          <span
            className={`inline-block md:hidden bg-blue-500 p-[4px] rounded-full cursor-pointer mt-[11px] ml-[11px] customTransition ${showSideBar && "rotate-180"}`}
            onClick={switchShowSB}
          >
            <MdOutlineArrowBackIos className="text-[22px] text-white font-semibold" />
          </span>
          <div className="xl:mx-auto pb-[50px] px-[24.624px] sm:px-[49.248px] md:px-[54px] lg:px-[90px] pt-0 md:pt-[20px] max-w-[960px]">
            <h2 className="text-[30px] md:text-[40px] line-clamp-1 font-poppins font-semibold mb-[15px] md:mb-6">{data.name}</h2>
            <div className="flex space-x-2 mb-[18px] bg-[#f0f3f6] rounded-[6px] py-[9px] px-[18px] text-[13.5px] font-bold font-rubik text-blue-500">
              <Link href={data.course.slug}>
                <a className="w-auto line-clamp-1 ">{data.course.name}</a>
              </Link>
              <span className="font-sans-serif font-normal text-black">&#62;</span>
              <Link href={data.slug}>
                <a className="w-auto line-clamp-1 ">{data.name}</a>
              </Link>
            </div>
            <div className="iframe-container">
              <YTVideo />
            </div>
            <div className="prose prose-p:font-rubik my-7 min-w-full">
              {parser(data.description)}
            </div>
            <div className="border-t-2 border-b-[#e2e7ed]">
              <div className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 text-center pt-3 pb-5">
                {data.download.map((btn, i) => (
                  <Link key={i} href={btn.link}>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="p-3 bg-blue-500 rounded-lg text-[13px] md:text-[13.5px] text-white font-rubik font-medium customTransition hover:bg-blue-400"
                    >{btn.name}</a>
                  </Link>
                ))}
              </div>
              <div className="flex justify-between">
                <Link href={`/${data.course.slug}/lessons/${data.previous_lesson_btn.slug}`}>
                  <a className={nextPreviousLessonsClassNames}>
                    <HiOutlineArrowNarrowLeft className={arrowClassNames(0)} />
                    <span>{data.previous_lesson_btn.name}</span>
                  </a>
                </Link>
                <Link href={`/${data.course.slug}/lessons/${data.next_lesson_btn.slug}`}>
                  <a className={nextPreviousLessonsClassNames}>
                    <span>{data.next_lesson_btn.name}</span>
                    <HiOutlineArrowNarrowRight className={arrowClassNames(1)} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}