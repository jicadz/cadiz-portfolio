import { useRef } from "react"
import "./Projects.css"
import portfolio1 from "../../assets/portfolio-1.png"
import portfolio2 from "../../assets/portfolio-2.png"
import job1 from "../../assets/job-1.png"
import job2 from "../../assets/job-2.png"
import lemon1 from "../../assets/lemon-1.png"
import netflix1 from "../../assets/netflix-1.png"
import netflix2 from "../../assets/netflix-2.png"

const WebDev= () => {

    const refToProj1 = useRef(null)
    const refToProj2 = useRef(null)
    const refToProj3 = useRef(null)
    const refToProj4 = useRef(null)

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

      const scrollProj3 = () => {
        if(refToProj3.current) {
          refToProj3.current.scrollIntoView({ behavior: 'smooth'})
        }
      }

      const scrollProj4 = () => {
        if(refToProj4.current) {
          refToProj4.current.scrollIntoView({ behavior: 'smooth'})
        }
      }

    return(
        <section className="wd relative sm:flex px-[1rem] sm:gap-[10%] w-[100%] lg:px-[4rem]">
                <div className="hidden w-[20%] border-r-[#393131] border-r-[1px] border-r-[solid] sm:block">
                    <div className="sticky top-[15%] flex flex-col gap-[1rem]">
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">Projects</p>
                        <ul className="list-proj font-bgs flex flex-col gap-[.5rem] lg:text-[1.5rem]">
                            <li className="cursor-pointer text-[#878484] hover:text-[#f1dada]" onClick={scrollProj1}>Personal Portfolio</li>
                            <li className="cursor-pointer text-[#878484] hover:text-[#f1dada]" onClick={scrollProj2}>Job Search</li>
                            <li className="cursor-pointer text-[#878484] hover:text-[#f1dada]" onClick={scrollProj3}>LemonAide</li>
                            <li className="cursor-pointer text-[#878484] hover:text-[#f1dada]" onClick={scrollProj4}>Netflix Clone</li>
                        </ul>
                    </div>
                </div>

            <div className="flex flex-col gap-[5rem] sm:w-[80%]">
            <div className="flex flex-col gap-[1rem]" ref={refToProj1}>

                <div className="flex items-center gap-[.7rem]">
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">Web Development</p>
                    <span className="h-[1px] flex-1 bg-[#393131]"></span>
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">01</p>
                </div>

                <div className="flex flex-col items-start gap-[1rem] md:flex-row md:justify-between sm:py-[2rem]">
                    <h1 className="text-[1.5rem] font-bgs sm:text-[2.5rem]" data-aos="fade-up" data-aos-duration="800">Personal Portfolio</h1>
                    <p className="pr-[1rem] text-[1rem] md:w-[70%] sm:text-[1.2rem]" data-aos="fade-up" data-aos-duration="800">This portfolio website is crafted entirely with pure HTML, CSS, and JavaScript, focusing on clean code, fast performance, and a seamless user experience. It showcases a minimalist yet modern design that highlights the content while maintaining an intuitive and visually appealing layout.</p>
                </div>

                <div className="box-image flex flex-col gap-[1rem]">
                    <div className="portfolio-1 w-[100%]" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={portfolio1} alt="" />
                    </div>
                    <div className="portfolio-2 w-[100%]" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={portfolio2} alt="" />
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-[1rem]" ref={refToProj2}>

                <div className="flex items-center gap-[.7rem]">
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">Web Development</p>
                    <span className="h-[1px] flex-1 bg-[#393131]"></span>
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">02</p>
                </div>

                <div className="flex flex-col items-start gap-[1rem] md:flex-row md:justify-between sm:py-[2rem]">
                    <h1 className="text-[1.5rem] font-bgs sm:text-[2.5rem]" data-aos="fade-up" data-aos-duration="800">Job Search</h1>
                    <p className="pr-[1rem] text-[1rem] md:w-[70%] sm:text-[1.2rem]" data-aos="fade-up" data-aos-duration="800">This job search platform is built using React, designed to provide a fast, responsive, and user-friendly experience for job seekers and employers alike. It leverages the power of modern front-end development to create a dynamic and engaging platform with a focus on efficiency and ease of use.</p>
                </div>

                <div className="box-image flex flex-col gap-[1rem]">
                    <div className="job-1 w-[100%]" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={job1} alt="" />
                    </div>
                    <div className="job-2 w-[100%]" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={job2} alt="" />
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-[1rem]" ref={refToProj3}>

                <div className="flex items-center gap-[.7rem]">
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">Web Development</p>
                    <span className="h-[1px] flex-1 bg-[#393131]"></span>
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">03</p>
                </div>

                <div className="flex flex-col items-start gap-[1rem] md:flex-row md:justify-between sm:py-[2rem]">
                    <h1 className="text-[1.5rem] font-bgs sm:text-[2.5rem]" data-aos="fade-up" data-aos-duration="800">LemonAide</h1>
                    <p className="pr-[1rem] text-[1rem] md:w-[70%] sm:text-[1.2rem]" data-aos="fade-up" data-aos-duration="800">The LemonAide website is a refreshing and vibrant platform built entirely with pure HTML, CSS, and JavaScript, designed to educate users about the numerous health benefits of lemons. The site combines an eye-catching design with smooth functionality to create an engaging and informative experience.</p>
                </div>

                <div className="box-image flex flex-col gap-[1rem]">
                    <div className="lemon-1 w-[100%]" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={lemon1} alt="" />
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-[1rem]" ref={refToProj4}>

                <div className="flex items-center gap-[.7rem]">
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">Web Development</p>
                    <span className="h-[1px] flex-1 bg-[#393131]"></span>
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">04</p>
                </div>

                <div className="flex flex-col items-start gap-[1rem] md:flex-row md:justify-between sm:py-[2rem]">
                    <h1 className="text-[1.5rem] font-bgs sm:text-[2.5rem]" data-aos="fade-up" data-aos-duration="800">Netflix Clone</h1>
                    <p className="pr-[1rem] text-[1rem] md:w-[70%] sm:text-[1.2rem]" data-aos="fade-up" data-aos-duration="800">This Netflix clone website is crafted entirely using pure HTML, CSS, and JavaScript to replicate the look and feel of the popular streaming platform. Designed with a focus on performance, user interaction, and aesthetic appeal, it provides an immersive browsing experience with modern design principles and smooth functionality.</p>
                </div>

                <div className="box-image flex flex-col gap-[1rem]">
                    <div className="netflix-1 w-[100%]" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={netflix1} alt="" />
                    </div>
                    <div className="netflix-2 w-[100%]" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={netflix2} alt="" />
                    </div>
                </div>

            </div>
        </div>

        </section>
    );
}

export default WebDev;