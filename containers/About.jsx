import data from "data/main.json";
import { FaQuoteLeft } from "react-icons/fa";
import { Video, DecorationImg } from "subcomponents";
import { shape4, shape5, shape6, shape8 } from "assets";


export default function About({ metaData }) {
  return (
    <section id="about" className="section-banner relative" style={{backgroundSize: "contain"}}>
      <div className="lg:container mx-auto px-5 sm:px-8 md:px-10 lg:px-24 pt-10 pb-[20px] sm:pb-[30px] lg:pt-16 text-center">
        <h2 data-aos="fade-up" className="mb-5 text-[30px] leading-[39px] md:text-[56px] md:leading-[72.8px] font-semibold font-poppins">
          {data.about.title}
        </h2>
        <p data-aos="fade-up" className="font-rubik word-spacing-3 mb-[38px] lg:px-[120px] text-[#000000d9] text-[20px] leading-[30.4869px] md:text-[25px] font-rubik md:leading-[30px]">
          {metaData?.aboutText}
        </p>
        <div data-aos="fade-up" className="drop-shadow-2xl relative">
          <Video video={metaData?.video} />
          <DecorationImg img={shape4} className="top-[-50px] right-[-50px]" />
        </div>
        <div data-aos="fade-up" className="pt-20 lg:px-16">
          <FaQuoteLeft className="mb-5 text-[37px] text-main mx-auto" />
          <h2 className="text-[20px] lg:text-[32px] font-poppins">
            {metaData?.founderText}
          </h2>
          <div className="w-10 h-[1px] bg-black mx-auto my-6" />
          <p className="text-[18px] font-semibold font-poppins mb-1">{data.about.name}</p>
          <p className="font-rubik text-[14px] font-normal">{data.about.job}</p>
        </div>
      </div>
      <div>
        <DecorationImg dataAos="zoom-in" img={shape5} className="top-[110px] left-32" />
        <DecorationImg img={shape6} className="bottom-[110px] right-32 animate-spin" style={{animationDuration: "3s"}} />
        <DecorationImg dataAos="zoom-in" img={shape8} className="bottom-[210px] left-20" />
      </div>
    </section>
  );
}