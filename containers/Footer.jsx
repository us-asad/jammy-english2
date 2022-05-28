import data from "data/main.json";
import contactData from "data/contact.json";
import { Logo, SocialIcon } from "subcomponents";

const bottomTextClasses = "text-[12.768px] lg:text-[14px] font-rubik text-center word-spacing-3";

export default function Footer({ metaData }) {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col justify-center items-center py-5">
        <Logo logo={metaData?.logo} metaData={metaData} fill="#fff" />
        <div className="flex space-x-4 md:space-x-5 justify-center mt-3">
          {metaData?.facebookLink && <SocialIcon link={metaData?.facebookLink} icon={{link: "/social/facebook.svg", alt: "facebook"}} size={25} blackWhite />}
          {metaData?.instagramLink && <SocialIcon link={metaData?.instagramLink} icon={{link: "/social/instagram.svg", alt: "instagram"}} size={25} blackWhite />}
          {metaData?.youtubeLink && <SocialIcon link={metaData?.youtubeLink} icon={{link: "/social/youtube.svg", alt: "youtube"}} size={25} blackWhite />}
          {metaData?.telegramLink && <SocialIcon link={metaData?.telegramLink} icon={{link: "/social/telegram.svg", alt: "telegram"}} size={25} blackWhite />}
        </div>
      </div>
      <div className="border-t-[1px] mx-[30px] lg:mx-0 border-[#ffffff66]">
        <div className="lg:container lg:mx-auto xl:px-10 py-5 flex flex-col sm:flex-row sm:justify-between items-center">
          <p className={`${bottomTextClasses} mb-[10px] sm:mb-0`}>Copyright © {new Date().getFullYear()} {metaData?.mainName}</p>
          <p className={bottomTextClasses}>
            <span>{data.footer.powered_by.text}</span>&nbsp;
            <a
              href={metaData?.developerLink}
              rel="noreferrer"
              target="_blank"
              className="text-gray-200 hover:text-gray-300 customTransition"
            >
              {metaData?.developerName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}