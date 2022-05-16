import data from "data/about.json";
import { Video } from "components";
import { FaQuoteLeft } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="lg:container mx-auto px-5 sm:px-8 md:px-10 lg:px-24 pt-24 lg:pt-16 text-center">
      <h2 className="mb-5 text-[30px] leading-[39px] md:text-[56px] md:leading-[72.8px] font-semibold font-poppins">
        {data.title}
      </h2>
      <p className="mb-[38px] lg:px-[120px] text-blue-500 text-[16.416px] leading-[30.4869px] md:text-[18px] font-rubik md:leading-[30px]">
        {data.subtitle}
      </p>
      <div className="drop-shadow-2xl">
        <Video />
      </div>
      <div className="pt-20 lg:px-16">
        <FaQuoteLeft className="mb-5 text-[37px] text-[#1579e6] mx-auto" />
        <h2 className="text-[20px] lg:text-[32px] font-poppins">
          {data.quote_text}
        </h2>
        <div className="w-10 h-[1px] bg-black mx-auto my-6" />
        <p className="text-[18px] font-semibold font-poppins mb-1">{data.name}</p>
        <p className="font-rubik text-[14px] font-normal">{data.job}</p>
      </div>
    </section>
  );
}