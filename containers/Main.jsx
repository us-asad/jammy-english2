import data from "data/main.json";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Header } from "containers";
import { Video } from "subcomponents";

export default function Main({ allCourses }) {
  return (
    <div className="custom-banner text-white">
      <Header allCourses={allCourses} />
      <div className="lg:container flex flex-col lg:flex-row mx-auto pt-32 -mb-3 px-6 sm:px-10 lg:pt-[280px] lg:pb-[80px] px-10">
        <div className="lg:w-[52.544%] md:pr-40 lg:pr-16 lg:pb-0">
          <div className="mb-5 flex items-center">
            <span className={`w-3 h-3 main_bg rounded-full`} />
            <p className="pl-3 text-[13px] font-rubik font-medium tracking-[3px]">{data.main_banner.small_title}</p>
          </div>
          <h2 className="mt-1 mb-6 text-[30px] leading-[39px] md:text-[56px] md:leading-[72.8px] font-semibold font-poppins">
            {data.main_banner.title}
          </h2>
          <p className="mb-[38px] text-[16.416px] leading-[30.4869px] md:text-[18px] font-rubik md:leading-[33.4286px]">
            {data.main_banner.subtitle}
          </p>
          {data.main_banner.buttons.map(btn => (
            <Link key={btn.link} href={btn.link}>
              {btn.type === "non-bare" ? (
                <a className="mb-5 md:mb-0 block text-center md:inline-block md:mr-10 py-[10px] px-[30px] bg-white text-black rounded-full text-[13.58px] md:text-[15px] font-poppins font-semibold cursor-pointer main_bg_hover customTransition">
                  {btn.name}
                </a>
              ) : (
                <a className="block text-center md:inline-block text-[13.58px] md:text-[15px] font-poppins font-semibold cursor-pointer main_color_hover customTransition">
                  {btn.name}
                  <FaLongArrowAltRight className="inline-block text-[15px] ml-2.5" />
                </a>
              )}
            </Link>
          ))}
        </div>
        <div className="lg:w-[47.456%]">
          <Video additionalStyles />
        </div>
      </div>
    </div>
  );
}