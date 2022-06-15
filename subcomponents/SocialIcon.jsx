import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { GrPinterest } from "react-icons/gr";

const iconClassNames = "text-lg";

export default function SocialIcon({ link, icon, size, blackWhite, dataAos }) {
  const name = icon.alt.toLowerCase();

  return (
    <a
      data-aos={dataAos}
      href={link}
      rel="noreferrer"
      target="_blank"
      className={`${!blackWhite ? "hover:scale-105" : "hover:rotate-[360deg] duration-600"} hover:drop-shadow-lg focus:scale-95 customTransition flex`}
    >
      {blackWhite ? (
        name === "facebook"
        ? <FaFacebook className={iconClassNames} />
        : name === "youtube"
        ? <FaYoutube className={iconClassNames} />
        : name === "telegram"
        ? <BsTelegram className={iconClassNames} />
        : name === "pinterest"
        ? <GrPinterest className={iconClassNames} />
        : name === "tiktok"
        ? <SiTiktok className={iconClassNames} />
        : name === "instagram"
        ? <AiFillInstagram className={iconClassNames} />
        : ""
      ) : (
        <img
          src={icon.link}
          alt={name}
          width={name === "tiktok" ? 40 : size}
          height={name === "tiktok" ? 40 : size}
        />
      )}
    </a>
  );
}