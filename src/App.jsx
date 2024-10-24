import { useRef, useState, useEffect } from "react"
import Homepage from "./compo/homepage/Homepage"
import Nav from "./compo/nav/Nav"
import About from "./compo/about/About"
import Projects from "./compo/projectss/Projects"
import Contact from "./compo/contact/Contact"
import VelocityScroll from "./components/ui/VelocityScroll"
import Uiux from "./compo/projectss/Uiux"
import WebDev from "./compo/projectss/WebDev"
import MobileNav from "./compo/nav/MobileNav"
import { RingLoader } from "react-spinners"
import { ParallaxProvider } from "react-scroll-parallax"

function App() {

  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 20);

      return () => clearTimeout(timer);
    }
  }, [count]);

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="relative bg-[#0e090d] text-[#f1dada] w-[100%]">
      {
        loading ?
        <div className="bg-[#0e090d] text-[#f1dada] h-[100vh] relative flex justify-center items-center">
          <p className="font-bgs text-[2rem] font-black absolute">{count}%</p>
          <RingLoader color="#ff0049" size={270} speedMultiplier={1.5} />
        </div>
        :
      <div>
      <MobileNav />
      <Nav />
      <ParallaxProvider scrollAxis="vertical"><Homepage /></ParallaxProvider>
      <About />
      <Projects />
      <VelocityScroll text={'UI/UX DESIGN'} className={'text-[4rem] font-bgs leading-[4rem] font-black md:text-[7rem] lg:text-[10rem] md:leading-[9rem]'}/>
      <Uiux />
      <VelocityScroll text={'WEB DEVELOPMENT'} className={'text-[4rem] font-bgs leading-[4rem] font-black md:text-[7rem] lg:text-[10rem] md:leading-[9rem]'}/>
      <WebDev />
      <Contact />
      </div>
      }
    </div>
  )
}

export default App
