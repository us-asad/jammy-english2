import { useState } from "react";
import data from "data/courses.json";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export default function LessonSideBar({ switchShowSB, showSideBar }) {

  return (
    <div className={`w-[349px] small-mobile-w-full bg-[#dddddd] h-full z-10 fixed responsive-transition ${showSideBar ? "left-0" : "-left-[120%] md:-left-[280px]"}`}>
      <span
        className={`absolute -right-[10px] top-[37.5px] p-[5px] bg-blue-500 rounded-full cursor-pointer customTransition ${showSideBar && "rotate-180"}`}
        onClick={switchShowSB}
      >
        <MdOutlineArrowBackIosNew className="text-[24px] text-white font-semibold" />
      </span>
    </div>
  );
}