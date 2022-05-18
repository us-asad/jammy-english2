import data from "data/contact.json";
import Image from "next/image";

export default function SocialIcon({ link, icon, size }) {
  return (
    <a 
      href={link}
      rel="noreferrer"
      target="_blank"
      className="hover:scale-105 hover:drop-shadow-lg focus:scale-95 customTransition"
    >
      <Image
        src={icon.link}
        alt={icon.alt}
        width={size}
        height={size}
      />
    </a>
  );
}