import Link from "next/link";
import Image from "next/image";
import { MdPlayLesson } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "subcomponents";

export default function TopCoursesCard({ thumbnail, name, metaData, slug, mainSlug, btnName, isReady, dataAos }) {
  return (
    <div data-aos={dataAos} className={`rounded-[16px] bg-white overflow-hidden transition duration-300 drop-shadow-lg ${isReady && "hover:drop-shadow-2xl"}`}>
      <div className={isReady && "transition duration-300 hover:scale-105"}>
        <Image
          src={thumbnail?.url}
          alt="Top Course"
          width="360"
          height="240"
          className="rounded-[16px]"
        />
      </div>
      <div className="px-10 pt-6 pb-8">
        <Link href={`/${mainSlug}/${slug}`}>
          <a className={`text-[18px] font-poppins transition duration-200 custonLineClamp1 ${isReady ? "hover:text-blue-500" : "pointer-events-none select-none text-gray-300"}`}>{name}</a>
        </Link>
        <div className="flex mt-5 flex-col justify-center items-center space-y-4 sm:flex-row sm:space-y-0">
          {isReady && <p className="flex items-center justify-center sm:justify-start space-x-2 w-1/2 font-rubik text-[15px] text-[#576168]">
            <MdPlayLesson />
            <span>{metaData}</span>
          </p>}
          <Link href={`/${mainSlug}/${slug}`}>
            <a className={`flex justify-center w-full items-center group font-rubik p-[10px] border-[1px] rounded-full transition duration-100 text-[15px] ${isReady ? "text-[#576168] hover:bg-main hover:text-white focus:scale-95 sm:w-1/2 space-x-2" : "pointer-events-none select-none text-amber-400"}`}>
              <span>{isReady ? btnName : "Coming Soon"}</span>
              {isReady && <FaLongArrowAltRight className="customTransition group-hover:pl-2" />}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}