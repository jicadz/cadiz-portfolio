import { useRef } from "react"
import "./Projects.css"
import angkas1 from "../../assets/angkas-naog1.png"
import angkas2 from "../../assets/angkas-naog2.png"
import shoe1 from "../../assets/shoe-1.png"
import shoe2 from "../../assets/shoe-2.png"
import shoe3 from "../../assets/shoe-3.png"

const Uiux = () => {

    const refToProj1 = useRef(null)
    const refToProj2 = useRef(null)

    const scrollProj1 = () => {
        if(refToProj1.current) {
          refToProj1.current.scrollIntoView({ behavior: 'smooth'})
        }
      }
    
      const scrollProj2 = () => {
        if(refToProj2.current) {
          refToProj2.current.scrollIntoView({ behavior: 'smooth'})
        }
      }

    return(
        <section className="relative sm:flex px-[1rem] sm:gap-[10%] w-[100%] lg:px-[4rem]">
                <div className="hidden w-[20%] border-r-[#393131] border-r-[1px] border-r-[solid] sm:block">
                    <div className="sticky top-[15%] flex flex-col gap-[1rem]">
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">Projects</p>
                        <ul className="list-proj font-bgs flex flex-col gap-[.5rem] lg:text-[1.5rem]">
                            <li className="cursor-pointer text-[#878484] hover:text-[#f1dada]" onClick={scrollProj1}>Angkas-Naog App</li>
                            <li className="cursor-pointer text-[#878484] hover:text-[#f1dada]" onClick={scrollProj2}>Shoe-Commerce</li>
                        </ul>
                    </div>
                </div>

            <div className="flex flex-col gap-[5rem] sm:w-[80%]">
            <div className="flex flex-col gap-[1rem]" ref={refToProj1}>

                <div className="flex items-center gap-[.7rem]">
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">UI/UX Design</p>
                    <span className="h-[1px] flex-1 bg-[#393131]"></span>
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">01</p>
                </div>

                <div className="flex flex-col items-start gap-[1rem] md:flex-row md:justify-between sm:py-[2rem]">
                    <h1 className="text-[1.5rem] font-bgs sm:text-[2.5rem]" data-aos="fade-up" data-aos-duration="800">Angkas-Naog App</h1>
                    <p className="pr-[1rem] text-[1rem] md:w-[70%] sm:text-[1.2rem]" data-aos="fade-up" data-aos-duration="800">Angkas-Naog App is a fast, convenient, and reliable ride-hailing service that uses motorcycles for booking rides. Designed with Figma, the app provides a clean and user-friendly interface for a seamless booking experience. Users can quickly book a professional motorbike driver, track their ride in real time, and enjoy transparent pricing and flexible payment options.</p>
                </div>

                <div className="box-image flex flex-col gap-[1rem]">
                    <div className="angkas-naog1 w-[100%]" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={angkas1} alt="" />
                    </div>
                    <div className="angkas-naog2 w-[100%]" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={angkas2} alt="" />
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-[1rem]" ref={refToProj2}>

                <div className="flex items-center gap-[.7rem]">
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">UI/UX Design</p>
                    <span className="h-[1px] flex-1 bg-[#393131]"></span>
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">02</p>
                </div>

                <div className="flex flex-col items-start gap-[1rem] md:flex-row md:justify-between sm:py-[2rem]">
                    <h1 className="text-[1.5rem] font-bgs sm:text-[2.5rem]" data-aos="fade-up" data-aos-duration="800">Shoe Commerce</h1>
                    <p className="pr-[1rem] text-[1rem] md:w-[70%] sm:text-[1.2rem]" data-aos="fade-up" data-aos-duration="800">Shoe Commerce is a modern e-commerce platform designed for shoe enthusiasts, offering a seamless shopping experience for all types of footwear. Built with Figma, the website features a sleek, intuitive interface that makes browsing and purchasing shoes effortless. From casual sneakers to formal footwear, users can explore a wide range of styles and brands, all with detailed product views and easy navigation.</p>
                </div>

                <div className="box-image flex flex-col gap-[1rem]">
                    <div className="shoe-1 w-[100%]" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={shoe1} alt="" />
                    </div>
                    <div className="shoe-2 w-[100%]" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={shoe2} alt="" />
                    </div>
                    <div className="shoe-3 w-[100%]" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={shoe3} alt="" />
                    </div>
                </div>

            </div>
        </div>

        </section>
    );
}

export default Uiux;