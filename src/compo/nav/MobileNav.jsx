import { useState, useEffect, useRef } from "react";
import "./Nav.css"

const MobileNav = ({ scrollToHome, scrollToAbout, scrollToProjects , scrollToContact}) => {

  const [xAni, setXAni] = useState('');
  const [burgerNav, onBurgerNav] = useState(true);
  const [showNav, setShowNav] = useState('hidden');

  const showMobileNav = () => {
    onBurgerNav(!burgerNav);

    if (burgerNav == true) {
      setXAni('x')
      setShowNav('block')
    } else {
      setXAni('')
      setShowNav('hidden')
    }
  }
  

  return(
      <nav className={`navbar fixed z-[99] w-[100%] font-bgs sm:hidden`}>
          <div className="flex justify-between items-baseline px-[1rem] py-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] lg:py-[2rem] relative">
          <h1 className="text-[1.3rem] cursor-default lg:text-[1.7rem] font-medium z-[99]">J.I. CADIZ</h1>

          <div className={`burger-nav flex flex-col items-end gap-[.4rem] self-center absolute right-[1rem] z-[99] ${xAni}`} onClick={showMobileNav}>
            <span className="w-[35px]"></span>
            <span className="w-[30px]"></span>
            <span className="w-[25px]"></span>
          </div>

          <div className={`mobnav w-[100%] h-[120vh] justify-center items-center fixed top-0 left-0 ${showNav}`}>
          <ul className="text-[2rem] text-center flex flex-col mt-[40%] gap-[1.2rem]">
              <li onClick={scrollToHome}>Home</li>
              <li onClick={scrollToAbout}>About</li>
              <li onClick={scrollToProjects}>Projects</li>
              <li onClick={scrollToContact}>Contact</li>
          </ul>
          </div>
          </div>
      </nav>
  );
}

export default MobileNav;