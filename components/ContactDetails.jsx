import data from "data/contact.json";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactDetails() {
  return (
    <div className="px-6 py-10 md:p-14 md:pr-16 w-full">
      {data.contact_details.map((item, i) => (
        <div key={`contact_detail_${i}`} className="mb-10 md:mb-5 pb-5 border-b-[1px] border-black flex flex-col sm:flex-row">
          <div className="flex justify-center items-center w-[52px] h-[52px] border-2 mb-2 sm:mb-0 sm:mr-4 text-[16px] border-[#1579e6] rounded-full text-[#1579e6]">
            {item.icon === "phone" ? <FaPhone /> : <MdEmail />}
          </div>
          <div>
            <span className="inline-block mb-2 font-poppins font-semibold text-[13px]">{item.title}</span>
            <a
              href={item.data_link}
              rel="noreferrer"
              target="_blank"
              className="block font-rubik text-[16.416px] md:text-[18px] font-medium link-underline-dark"
            >{item.data}</a>
          </div>
        </div>
      ))}
      <h4 className="mb-5 font-poppins font-semibold text-[13px] text-center md:text-left">
        {data.social_icons_title}
      </h4>
      <div className="flex space-x-4 md:space-x-3 justify-center md:justify-start">
        {data.social_icons.map(icon => (
          <a 
            key={icon.link}
            href={icon.link}
            rel="noreferrer"
            target="_blank"
            className="hover:scale-105 hover:drop-shadow-lg focus:scale-95 customTransition"
          >
            <Image
              src={icon.icon.link}
              alt={icon.icon.alt}
              width={45}
              height={45}
            />
          </a>
        ))}
      </div>
    </div>
  );
}