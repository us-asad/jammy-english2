import Link from "next/link";
import { Logo } from "subcomponents/Svgs.jsx";

export default function LogoComponent({ className, logo, metaData, fill }) {
  return (
    <Link href="/">
      <a>
        <Logo className={className} fill={fill} />
      </a>
    </Link>
  );
}
