import data from "data/contact.json";
import { ContactDetails, SendMessage } from "components";

export default function Contact() {
  return (
    <section id="contact" className="custom-banner relative">
      <h2 className="absolute top-[31px] md:top-[35px] w-full text-center text-[30px] leading-[39px] md:text-[56px] md:leading-[72.8px] font-semibold font-poppins text-white">
        {data.title}
      </h2>
      <div className="pt-[100px] pb-[35px] sm:pb-[50px] md:pt-[130px] md:pb-[70px] px-6 md:px-10 xl:px-28">
          <div className="flex flex-col lg:flex-row w-full rounded-b-lg lg:rounded-b-[26px] bg-white">
            <div className="lg:w-1/2 flex justify-center items-center">
              <ContactDetails />
            </div>
            <div className="lg:w-1/2 contact_shadow">
              <SendMessage />
            </div>
        </div>
      </div>
    </section>
  );
}

/*
  <div style={{width: videoSize.width, height: videoSize.height}} />
  <div className="flex w-full absolute top-[100px] md:top-[140px] left-0 px-6 md:px-10 xl:px-28">
*/