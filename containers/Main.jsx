import data from "data/main.json";
import Link from "next/link";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Header } from "containers";
import { Video, DecorationImg } from "subcomponents";
import humanImg from "public/human.png";
import { shape1, shape2, shape3, arrow } from "assets";

export default function Main({ allCourses }) {
  return (
    <div className="custom-banner text-dark relative">
      <Header allCourses={allCourses} />
      <div className="lg:container flex relative flex-col z-10 lg:flex-row mx-auto pt-32 -mb-3 px-6 sm:px-10 lg:pt-0 px-10">
        <div className="lg:w-[52.544%] pb-[40px] lg:pb-[80px] lg:pt-[250px]">
          <div className="mb-5 flex items-center">
            <span className="w-3 h-3 bg-main rounded-full" />
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
                <a className="mb-5 md:mb-0 block text-center md:inline-block md:mr-10 py-[10px] px-[30px] bg-main text-light rounded-full text-[13.58px] md:text-[15px] font-poppins font-semibold cursor-pointer main_bg_hover customTransition">
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
        <div className="lg:w-[47.456%] lg:pt-[200px] mt-auto">
          <div className="relative cursor-pointer mb-[-5px] !bg-contain !bg-no-repeat !bg-center" style={{background: "url(/human-bg.png)"}}>
            <Image
              src={humanImg}
              width={humanImg.width}
              height={humanImg.height}
              objectFit='contain'
            />
          </div>
        </div>
      </div>
      <div>
        <DecorationImg img={shape1} className="2xl:top-[231px] 2xl:left-[50px] top-[170px] left-[-10px]" />
        <DecorationImg img={arrow} className="bottom-[20px] right-[50%]" />
        <DecorationImg img={shape2} className="top-[240px] right-[40%]" />
        <DecorationImg img={shape3} className="top-[250px] right-[90px]" />
      </div>
    </div>
  );
}