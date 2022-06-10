import { useRouter } from "next/router";
import Link from "next/link";
import { MdOutlineArrowBackIosNew, MdPlayLesson } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";

export default function LessonSideBar({ switchShowSB, showSideBar, course }) {
  const router = useRouter();

  return (
    <div className={`w-[349px] small-mobile-w-full bg-white border-r-[#e2e7ed] border-r h-full z-10 fixed responsive-transition ${showSideBar ? "left-0" : "-left-[120%] md:-left-[280px]"}`}>
      <span
        className={`absolute -right-[10px] top-[37.5px] p-[5px] bg-main rounded-full cursor-pointer customTransition ${showSideBar && "rotate-180"}`}
        onClick={switchShowSB}
      >
        <MdOutlineArrowBackIosNew className="text-[24px] text-white font-semibold" />
      </span>
      <h3 className="flex items-center space-x-2.5 px-[18px] py-[13px] bg-main font-poppins font-bold text-[18px] text-white">
        <BsBookHalf className="min-w-[18px] min-h-[18px]" />
        <span className="line-clamp-1">{course.name}</span>
      </h3>
      <div
        className={`max-h-full ${showSideBar ? "overflow-y-auto" : "overflow-hidden"}`}
        style={{maxHeight: `calc(100% - 53px)`}}
      >
      {course?.lessons?.map((lesson, i) => (
        <Link key={i} href={`/${course?.slug}/lessons/${lesson?.slug}`}>
          <a className={`flex items-center space-x-2 overflow-hidden p-[18px] border-b border-b-[#e2e7ed] text-[15.75px] font-rubik customTransition hover:text-main ${router?.query?.lessonSlug === lesson?.slug && "text-main pointer-events-none"}`}>
            <MdPlayLesson />
            <span className="line-clamp-1">{lesson?.name}</span>
          </a>
        </Link>
      ))}
      </div>
    </div>
  );
}