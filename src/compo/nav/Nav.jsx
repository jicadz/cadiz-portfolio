import { useState, useEffect, useRef } from "react";
import "./Nav.css"

const Nav = () => {

  // scroll effects of nav

  const [lastScrollY, setLastScrollY] = useState(0);
  const [classAni, setClassAni] = useState('');
  
  const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if(currentScrollY > lastScrollY) {
        setClassAni('navaniOut');
      } else if (currentScrollY < lastScrollY) {
        setClassAni('navaniIn');
      }

      setLastScrollY(currentScrollY)
      
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);

  return(
      <nav className={`navbar fixed z-[99] w-[100%] font-bgs hidden sm:block ${classAni}`}>
          <div className="flex justify-between items-baseline px-[1rem] py-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] lg:py-[2rem]">
          <h1 className="text-[1.3rem] cursor-default lg:text-[1.7rem] font-medium flex items-baseline gap-[1rem]">
            J.I. CADIZ
          </h1>
          <ul className="text-[1rem] flex gap-[1.2rem] lg:text-[1.2rem]">
              <a href="#homepage"><li>Home</li></a>
              <a href="#about"><li>About</li></a>
              <a href="#projects"><li>Works</li></a>
              <a href="#contact"><li>Contact</li></a>
          </ul>
          </div>
      </nav>
  );
}

export default Nav;