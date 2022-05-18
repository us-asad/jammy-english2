import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Button({ link, name }) {
  return (
    <Link href={link}>
      <a className="flex justify-center w-full items-center space-x-2 group sm:w-1/2 font-rubik p-[10px] border-[1px] rounded-full focus:scale-95 hover:bg-blue-500 hover:text-white transition duration-100 hover:text-blue-500 text-[15px] text-[#576168]">
        <span>{name}</span>
        <FaLongArrowAltRight className="customTransition group-hover:pl-2" />
      </a>
    </Link>
  );
}