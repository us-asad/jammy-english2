import { useState, useEffect, useRef } from "react";
import data from "data/contact.json";
import { ContactDetails, SendMessage } from "components";

export default function Contact() {
  const [videoSize, setVideoSize] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setVideoSize({height: containerRef.current?.offsetHeight, width: containerRef.current?.offsetWidth})
    if (typeof window !== "undefined") {
      window.addEventListener('resize', () => {
        setVideoSize({height: containerRef.current?.offsetHeight, width: containerRef.current?.offsetWidth})
      });
    }
  }, []);

  return (
    <section id="contact" className="custom-banner relative">
      <h2 className="absolute top-[31px] md:top-[35px] w-full text-center text-[30px] leading-[39px] md:text-[56px] md:leading-[72.8px] font-semibold font-poppins text-white">
        {data.title}
      </h2>
      <div className="pt-20">
        <div style={{width: videoSize.width, height: videoSize.height}} />
        <div
          className="flex w-full absolute top-[100px] md:top-[140px] left-0 px-6 md:px-10 xl:px-28"
          ref={containerRef}
        >
          <div className="flex flex-col lg:flex-row w-full h-96 rounded-b-lg lg:rounded-b-[26px] bg-white">
            <div className="lg:w-1/2">
              <ContactDetails />
            </div>
            <div className="lg:w-1/2 contact_shadow">
              <SendMessage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}