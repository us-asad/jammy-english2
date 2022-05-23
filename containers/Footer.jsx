import data from "data/footer.json";
import mainData from "data/main.json";
import contactData from "data/contact.json";
import Link from "next/link";
import Image from "next/image";
import { Logo, SocialIcon } from "subcomponents";

const bottomTextClasses = "text-[12.768px] lg:text-[14px] font-rubik text-center word-spacing-3";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col justify-center items-center py-5">
        <Logo className="w-[101px] h-[21px]" />
        <div className="flex space-x-4 md:space-x-3 justify-center mt-3">
          {contactData.social_icons.map(icon => <SocialIcon key={icon.link} link={icon.link} icon={icon.icon} size={25} blackWhite />)}
        </div>
      </div>
      <div className="border-t-[1px] mx-[30px] lg:mx-0 border-[#ffffff66]">
        <div className="lg:container lg:mx-auto xl:px-10 py-5 flex flex-col sm:flex-row sm:justify-between items-center">
          <p className={`${bottomTextClasses} mb-[10px] sm:mb-0`}>Copyright © {new Date().getFullYear()} {data.copyright_name}</p>
          <p className={bottomTextClasses}>
            <span>{data.powered_by.text}</span>&nbsp;
            <a
              href={data.powered_by.dev.link}
              rel="noreferrer"
              target="_blank"
              className="text-gray-200 hover:text-gray-300 customTransition"
            >
              {data.powered_by.dev.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}