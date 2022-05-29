import Link from "next/link";
import { Logo } from "subcomponents/Svgs.jsx";

export default function LogoComponent({ className, logo, metaData, fill, containerClassName }) {
  return (
    <Link href="/">
      <a className={containerClassName}>
        <Logo className={className} fill={fill} />
      </a>
    </Link>
  );
}
