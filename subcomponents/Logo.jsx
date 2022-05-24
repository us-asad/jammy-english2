import data from "data/main.json";
import Link from "next/link";
import Image from "next/image";

export default function Logo({ className }) {
  return (
    <Link href="/">
      <a className={`relative cursor-pointer block ${className}`}>
        <Image
          src={data.logo.link}
          alt={data.logo.alt || "Jammy English Logo"}
          layout='fill'
          objectFit='contain'
        />
      </a>
    </Link>
  );
}