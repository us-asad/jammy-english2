import data from "data/about.json";
import { Video } from "components";

export default function About() {
  return (
    <section id="about" className="lg:container mx-auto px-5 sm:px-8 md:px-10 lg:px-24 pt-24 lg:pt-16 text-center">
      <h2 className="mb-5 text-[30px] leading-[39px] md:text-[56px] md:leading-[72.8px] font-semibold font-poppins">
        {data.title}
      </h2>
      <p className="mb-[38px] lg:px-[120px] text-blue-500 text-[16.416px] leading-[30.4869px] md:text-[18px] font-rubik md:leading-[30px]">
        {data.subtitle}
      </p>
      <div>
        <Video />
      </div>
    </section>
  );
}