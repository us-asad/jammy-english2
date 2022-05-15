import Image from "next/image";
import data from "data/main.json";

export default function Logo({ showNavbar, switchNavbarShow }) {
  const arrowClassNames = index => `w-full h-1 rounded-full transition duration-50 main_bg ${showNavbar && index === 0 && "rotate-45"} ${showNavbar && index === 1 && "-rotate-45 -translate-y-2"} ${showNavbar && index === 2 && "hidden"}`;

  return (
    <div className="flex md:block w-full justify-between px-5 md:px-0">
      <div className="relative w-[96px] h-5">
        <Image
          src={data.logo.src}
          alt={data.logo.alt}
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className="h-full flex items-center justify-end">
        <div onClick={switchNavbarShow} className="md:hidden flex flex-col space-y-1 w-7 cursor-pointer z-50">
          {[...new Array(3)].map((_,index) => (
            <span key={index} className={arrowClassNames(index)}></span>
          ))}
        </div>
      </div>
    </div>
  );
}