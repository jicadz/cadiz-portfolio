import { useState, useEffect, useRef } from "react";
import "./Nav.css"

const MobileNav = () => {

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
          <h1 className="text-[1.3rem] cursor-default lg:text-[1.7rem] font-medium flex items-baseline gap-[1rem]">
            J.I. CADIZ
          </h1>

          <div className={`burger-nav flex flex-col items-end gap-[.4rem] self-center absolute right-[1rem] z-[99] ${xAni}`} onClick={showMobileNav}>
            <span className="w-[35px]"></span>
            <span className="w-[30px]"></span>
            <span className="w-[25px]"></span>
          </div>

          <div className={`mobnav w-[100%] h-[120vh] justify-center items-center fixed top-0 left-0 ${showNav}`}>
          <ul className="text-[2rem] text-center flex flex-col items-center mt-[40%] gap-[1.2rem]">
              <a href="#homepage"><li>Home</li></a>
              <a href="#about"><li>About</li></a>
              <a href="#projects"><li>Works</li></a>
              <a href="#contact"><li>Contact</li></a>
          </ul>
          </div>
          </div>
      </nav>
  );
}

export default MobileNav;