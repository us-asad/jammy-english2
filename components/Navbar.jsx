import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import data from "data/main.json";
import { MdOutlineKeyboardArrowDown  } from "react-icons/md";

export default function Navbar({ showNavbar, setShowNavbar }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const router = useRouter();

  const switchShowDD = v => () => setShowDropDown(v);

  return (
    <nav className="w-full bg-white md:bg-transparent text-black md:text-white mt-5 md:mt-0">
      <ul className="hidden md:flex justify-end">
        {data.nav_items.map(item => (
          <li
            key={item.slug}
            className={`mx-[15px] px-[3px] text-[18px] font-rubik ${!item.dropdown ? "link-underline hover:text-gray-300" : "relative"} ${router.route === item.slug ? "text-gray-300" : ""}`}
          >
            {item.dropdown ? (
              <>
                <p className="flex items-center cursor-pointer">
                  {item.name}
                  <MdOutlineKeyboardArrowDown className="text-[27px]" />
                </p>
                <div
                  className="opacity-0 absolute top-[5px] w-[95px] h-[39px] cursor-pointer"
                  onMouseEnter={switchShowDD(true)}
                  onMouseLeave={switchShowDD(false)}
                />
                <ol
                  className={`absolute z-20 left-[-188px] text-center flex flex-wrap w-[500px] bg-white text-black px-8 py-5 rounded customTransition ${showDropDown ? "pointer-events-auto opacity-1 top-[42px]" : "pointer-events-none opacity-0 top-[48px]"}`}
                  onMouseEnter={switchShowDD(true)}
                  onMouseLeave={switchShowDD(false)}
                >
                <div className="absolute -top-[9px] left-[215px] rotate-45 z-10 bg-white w-7 h-7" />
                  {item.dropdown.map(dItem => (
                    <li
                      key={dItem.slug}
                      className="w-1/3 px-1 py-[10px] link-underline link-underline-black"
                    >
                      <Link href={item.slug + dItem.slug}>
                        <a>{dItem.name}</a>
                      </Link>
                    </li>
                  ))}
                </ol>
              </>
            ) : (
              <Link href={item.slug}>
                <a>{item.name}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <ul className={`flex md:hidden justify-end flex-col justify-evenly text-[18px] mt-3 mx-2 ${!showNavbar ? "hidden" : ""}`}>
        {data.nav_items.map(item => (
          <li
            key={item.slug}
            className={`py-1.5 my-1 ${item.slug === router.route ? "bg-[#2131de] text-white rounded" : "border-b-[1px] last:border-b-0"} ${!item.dropdown ? "px-3" : ""}`}
          >
            {item.dropdown ? (
              <>
                <p
                  className="flex cursor-pointer"
                  onClick={switchShowDD(!showDropDown)}
                >
                  <span className={`text-[27px] customTransition ${showDropDown ? "rotate-180" : ""}`}>
                    <MdOutlineKeyboardArrowDown />
                  </span>
                  {item.name}
                </p>
                <ol className={`ml-[12px] text-[16px] ${showDropDown ? "" : "hidden"}`}>
                  {item.dropdown.map(dItem => (
                    <li
                      key={dItem.slug}
                      className={`px-3 py-1.5 my-1 ${item.slug === router.route ? "bg-[#2131de] text-white rounded" : "border-b-[1px] last:border-b-0"}`}
                    >
                      <Link href={item.slug + dItem.slug}>
                        <a
                          className="block"
                          onClick={() => setShowNavbar(false)}
                        >{dItem.name}</a>
                      </Link>
                    </li>
                  ))}
                </ol>
              </>
            ) : (
              <Link href={item.slug}>
                <a
                  className="block"
                  onClick={() => setShowNavbar(false)}
                >{item.name}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}