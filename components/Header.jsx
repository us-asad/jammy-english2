import { useState, useEffect } from "react";
import { Navbar, Logo } from "components";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
    <div className={`fixed top-0 left-0 w-full pt-[30px] md:pt-0 md:mt-0 customTransition ${scrollY > 30 ? "bg-[#0355d0] drop-shadow-2xl" : ""}`}>
      <div className="container mx-auto z-40 flex flex-col md:flex-row justify-between items-center md:h-[70px] md:px-10">
        <Logo showNavbar={showNavbar} switchNavbarShow={switchNavbarShow} />
        <Navbar showNavbar={showNavbar} />
      </div>
      {showNavbar && <div onClick={switchNavbarShow} className="absolute z-[-1] top-0 left-0 w-screen h-[1000vh] bg-black opacity-70"></div>}
    </div>
  );
}