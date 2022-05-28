import { useState, useEffect } from "react";
import { Navbar } from "components";
import { Logo } from "subcomponents";

export default function Header({ allCourses, bgDark, dataAos, metaData }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const arrowClassNames = index => `w-full h-1 rounded-full transition duration-50 ${showNavbar && index === 0 && "rotate-45"} ${showNavbar && index === 1 && "-rotate-45 -translate-y-2"} ${showNavbar && index === 2 && "hidden"} ${(scrollY > 15 || bgDark) || showNavbar ? "bg-white" : "bg-main"}`;

  const switchNavbarShow = () => setShowNavbar(prev => !prev);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll",() => {
        setScrollY(window.scrollY);
      });
    }
  },[]);

  if (showNavbar && typeof window !== "undefined") {
    window.document.body.style = "overflow: hidden";
  } else if (typeof window !== "undefined") {
    window.document.body.style = "overflow: auto";
  }

  return (
    <div className={`fixed top-0 left-0 z-[100] w-full pt-[30px] md:pt-0 md:mt-0 customTransition ${scrollY > 10 ? `bg-main drop-shadow-25 text-white` : bgDark ? "text-white" : "text-black"}`}>
      <div data-aos={dataAos} className="lg:container mx-auto z-40 flex flex-col md:flex-row justify-between items-center md:h-[85px] md:px-10">
        <div className="flex md:block w-full justify-between items-center px-5 md:px-0">
          <Logo logo={metaData?.logo} metaData={metaData} fill={scrollY > 10 || bgDark ? "#fff" : "#525FE1"} className="md:w-[200px] md:h-[50px]" />
          <div className="h-full flex items-center justify-end">
            <div onClick={switchNavbarShow} className="md:hidden flex flex-col space-y-1 w-7 cursor-pointer z-50">
              {[...Array(3)].map((_,index) => (
                <span key={index} className={arrowClassNames(index)}></span>
              ))}
            </div>
          </div>
        </div>
        <Navbar bgDark={bgDark} scrollY={scrollY} showNavbar={showNavbar} setShowNavbar={setShowNavbar} allCourses={allCourses} />
      </div>
      {showNavbar && <div onClick={switchNavbarShow} className="absolute z-[-1] top-0 left-0 w-screen h-[1000vh] bg-black opacity-70"></div>}
    </div>
  );
}