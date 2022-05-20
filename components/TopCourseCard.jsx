import Link from "next/link";
import Image from "next/image";
import { MdPlayLesson } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "subcomponents";

export default function TopCoursesCard({ image, name, metaData, slug, mainSlug }) {
  return (
    <div className="rounded-[16px] bg-white overflow-hidden drop-shadow-lg hover:drop-shadow-2xl transition duration-300">
      <div className="transition duration-300 hover:scale-105">
        <Image
          src={image.link}
          alt={image.alt}
          width="360"
          height="240"
          className="rounded-[16px]"
        />
      </div>
      <div className="px-10 pt-6 pb-8">
        <Link href={`/${mainSlug}/${slug.link}`}>
          <a className="text-[18px] font-poppins hover:text-blue-500 transition duration-200 custonLineClamp1">{name}</a>
        </Link>
        <div className="flex mt-5 flex-col justify-center items-center space-y-4 sm:flex-row sm:space-y-0">
          <p className="flex items-center justify-center sm:justify-start space-x-2 w-1/2 font-rubik text-[15px] text-[#576168]">
            <MdPlayLesson />
            <span>{metaData}</span>
          </p>
          <Button {...slug} mainSlug={mainSlug} />
        </div>
      </div>
    </div>
  );
}