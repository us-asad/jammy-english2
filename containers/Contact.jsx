import data from "data/contact.json";
import { ContactDetails, SendMessage } from "components";
import { DecorationImg } from "subcomponents";
import { shape15, shape17 } from "assets";

export default function Contact({ metaData }) {
  return (
    <section className="custom-banner relative">
      <div id="contact" className="absolute w-full h-10 -top-20" />
      <h2 data-aos="fade-up" className="absolute text-[#000000f0] top-[31px] md:top-[35px] w-full text-center text-[30px] leading-[39px] md:text-[56px] md:leading-[72.8px] font-semibold font-poppins text-black">
        {data.title}
      </h2>
      <div className="container mx-auto pt-[100px] pb-[35px] sm:pb-[50px] md:pt-[130px] md:pb-[70px] px-6 md:px-10 xl:px-28 relative z-10">
        <div className="flex flex-col lg:flex-row w-full rounded-[19px] bg-white relative z-10">
          <div className="lg:w-1/2 flex justify-center items-center">
            <ContactDetails metaData={metaData} />
          </div>
          <div className="lg:w-1/2 contact_shadow">
            <SendMessage />
          </div>
        </div>
        <DecorationImg img={shape17} className="top-[33px] right-[7px] animate-spin" style={{animationDuration: "5s"}}/>
      </div>
      <div>
        <DecorationImg dataAos="zoom-in" img={shape15} className="bottom-32 left-[5%] !opacity-60" />
      </div>
    </section>
  );
}