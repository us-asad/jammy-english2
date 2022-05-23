import data from "data/contact.json";
import Image from "next/image";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const iconClassNames = "text-lg";

export default function SocialIcon({ link, icon, size, blackWhite }) {
  const name = icon.alt.toLowerCase();

  return (
    <a 
      href={link}
      rel="noreferrer"
      target="_blank"
      className={`${!blackWhite ? "hover:scale-105" : "hover:rotate-[360deg] duration-600"} hover:drop-shadow-lg focus:scale-95 customTransition`}
    >
      {blackWhite ? (
        name === "facebook"
        ? <FaFacebook className={iconClassNames} />
        : name === "youtube"
        ? <FaYoutube className={iconClassNames} />
        : name === "telegram"
        ? <BsTelegram className={iconClassNames} />
        : name === "instagram"
        ? <AiFillInstagram className={iconClassNames} />
        : ""
      ) : (
        <Image
          src={icon.link}
          alt={name}
          width={size}
          height={size}
        />
      )}
    </a>
  );
}