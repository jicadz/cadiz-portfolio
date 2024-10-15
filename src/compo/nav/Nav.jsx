import { useState, useEffect, useRef } from "react";
import "./Nav.css"

const Nav = ({ scrollToHome, scrollToAbout, scrollToProjects , scrollToContact}) => {

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
      <nav className={`navbar fixed z-[99] w-[100%] font-bgs ${classAni}`}>
          <div className="flex justify-between items-baseline px-[1rem] py-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] lg:py-[2rem]">
          <h1 className="text-[1.3rem] cursor-default lg:text-[1.7rem] font-medium">J.I. CADIZ</h1>
          <ul className="text-[1rem] flex gap-[1.2rem] lg:text-[1.2rem]">
              <li onClick={scrollToHome}>Home</li>
              <li onClick={scrollToAbout}>About</li>
              <li onClick={scrollToProjects}>Projects</li>
              <li onClick={scrollToContact}>Contact</li>
          </ul>
          </div>
      </nav>
  );
}

export default Nav;