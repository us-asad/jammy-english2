import Link from "next/link";
import Image from "next/image";
import { MdPlayLesson } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function TopCoursesCard({ image, name, lessons, button }) {
  return (
    <div className="rounded-[16px] bg-white drop-shadow-lg hover:drop-shadow-2xl transition duration-300">
      <div>
        <Image
          src={image.link}
          alt={image.alt}
          width="360"
          height="240"
          className="rounded-[16px]"
        />
      </div>
      <div className="px-10 pt-6 pb-8">
        <Link href={button.link}>
          <a className="text-[18px] font-poppins hover:text-blue-500 transition duration-200 custonLineClamp1">{name}</a>
        </Link>
        <div className="flex mt-5">
          <p className="flex items-center space-x-2 w-1/2 font-rubik text-[15px] text-[#576168]">
            <MdPlayLesson />
            <span>{lessons} lessons</span>
          </p>
          <Link href={button.link}>
            <a className="flex justify-end items-center space-x-2 group w-1/2 font-rubik transition duration-100 hover:text-blue-500 text-[15px] text-[#576168]">
              <span>{button.name}</span>
              <FaLongArrowAltRight className="customTransition group-hover:pl-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}