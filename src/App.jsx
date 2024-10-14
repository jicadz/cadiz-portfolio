import { useRef } from "react"
import Homepage from "./compo/homepage/Homepage"
import Nav from "./compo/nav/Nav"
import About from "./compo/about/About"
import Projects from "./compo/projectss/Projects"
import Contact from "./compo/contact/Contact"
import VelocityScroll from "./components/ui/VelocityScroll"
import Uiux from "./compo/projectss/Uiux"
import WebDev from "./compo/projectss/WebDev"

function App() {

  const refToHome = useRef(null)
  const refToAbout = useRef(null)
  const refToProjects = useRef(null)
  const refToContacts = useRef(null)

  const scrollHome = () => {
    if(refToHome.current) {
      refToHome.current.scrollIntoView({ behavior: 'smooth'})
    }
  }

  const scrollAbout = () => {
    if(refToAbout.current) {
      refToAbout.current.scrollIntoView({ behavior: 'smooth'})
    }
  }

  const scrollProjects = () => {
    if(refToProjects.current) {
      refToProjects.current.scrollIntoView({ behavior: 'smooth'})
    }
  }

  const scrollContact = () => {
    if(refToContacts.current) {
      refToContacts.current.scrollIntoView({ behavior: 'smooth'})
    }
  }

  return (
    <div className="relative bg-[#0e090d] text-[#f1dada] w-[100%]">
      <Nav scrollToHome={scrollHome} scrollToAbout={scrollAbout} scrollToProjects={scrollProjects} scrollToContact={scrollContact}/>
      <Homepage ref={refToHome}/>
      <About ref={refToAbout}/>
      <Projects ref={refToProjects}/>
      <VelocityScroll text={'UI/UX DESIGN'} className={'text-[4rem] font-bgs leading-[4rem] font-black md:text-[7rem] lg:text-[10rem] md:leading-[9rem]'}/>
      <Uiux />
      <VelocityScroll text={'WEB DEVELOPMENT'} className={'text-[4rem] font-bgs leading-[4rem] font-black md:text-[7rem] lg:text-[10rem] md:leading-[9rem]'}/>
      <WebDev />
      <Contact ref={refToContacts}/>
    </div>
  )
}

export default App
