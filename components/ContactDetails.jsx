import data from "data/contact.json";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SocialIcon } from "subcomponents";

export default function ContactDetails({ metaData }) {
  return (
    <div className="px-6 py-10 md:p-14 md:pr-16 w-full">
      <div data-aos="fade-up" className="mb-10 md:mb-5 pb-5 border-b-[1px] border-black flex flex-col sm:flex-row">
        <div className="flex justify-center items-center w-[52px] h-[52px] border-2 mb-2 sm:mb-0 sm:mr-4 text-[16px] border-[#1579e6] rounded-full text-[#1579e6]">
          <FaPhone />
        </div>
        <div>
          <span className="inline-block mb-2 font-poppins font-semibold text-[13px]">Call Us</span>
          <a
            href={`tel:${metaData?.phoneNumber}`}
            rel="noreferrer"
            target="_blank"
            className="block font-rubik text-[16.416px] md:text-[18px] font-medium link-underline-dark"
          >{metaData?.phoneNumber}</a>
        </div>
      </div>
      <div data-aos="fade-up" className="mb-10 md:mb-5 pb-5 border-b-[1px] border-black flex flex-col sm:flex-row">
        <div className="flex justify-center items-center w-[52px] h-[52px] border-2 mb-2 sm:mb-0 sm:mr-4 text-[16px] border-[#1579e6] rounded-full text-[#1579e6]">
          <MdEmail />
        </div>
        <div>
          <span className="inline-block mb-2 font-poppins font-semibold text-[13px]">Email Us</span>
          <a
            href={`mailto:${metaData?.email}`}
            rel="noreferrer"
            target="_blank"
            className="block font-rubik text-[16.416px] md:text-[18px] font-medium link-underline-dark"
          >{metaData?.email}</a>
        </div>
      </div>
      <h4 data-aos="fade-up" className="mb-5 font-poppins font-semibold text-[13px] text-center md:text-left">
        {data.social_icons_title}
      </h4>
      <div className="flex space-x-4 md:space-x-3 justify-center md:justify-start">
        {metaData?.facebookLink && <SocialIcon dataAos="zoom-in" link={metaData?.facebookLink} icon={{link: "/social/facebook.svg", alt: "facebook"}} size={45} />}
        {metaData?.instagramLink && <SocialIcon dataAos="zoom-in" link={metaData?.instagramLink} icon={{link: "/social/instagram.svg", alt: "instagram"}} size={45} />}
        {metaData?.youtubeLink && <SocialIcon dataAos="zoom-in" link={metaData?.youtubeLink} icon={{link: "/social/youtube.svg", alt: "youtube"}} size={45} />}
        {metaData?.telegramLink && <SocialIcon dataAos="zoom-in" link={metaData?.telegramLink} icon={{link: "/social/telegram.svg", alt: "telegram"}} size={45} />}
      </div>
    </div>
  );
}
