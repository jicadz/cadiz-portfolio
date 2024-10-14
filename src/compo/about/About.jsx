import React from "react";
import RedDot from "../red-dot/RedDot";
import { FaAward } from "react-icons/fa6";
import "./About.css"
import Toolbox from "./Toolbox";
import Skills from "../about/Skills"
import { ShinyButton } from "@/components/ui/ShinyButton";
import { SparklesText } from "@/components/ui/SparklesText";

const About = React.forwardRef((props, ref) => {
    return(
        <section ref={ref} className="flex flex-col gap-[4rem] lg:px-[5rem] cursor-default">
            
            <div className="flex items-center justify-center gap-[1rem]">
                <span className="h-[1px] flex-1 bg-[#393131]"></span>
                    <p className="font-bgs text-[3rem] lg:text-[6rem]">ABOUT ME</p>
                <span className="h-[1px] flex-1 w-[20px] bg-[#393131]"></span>
            </div>

            <div className="flex flex-col items-center gap-[3rem] lg:flex-row lg:mt-[3rem]">
            <div className="relative self-center lg:self-start">
                <div className="outer-circle2 flex items-center justify-center">
                    <div className="inner-circle2"></div>
                </div>
                <div className="face-image2"></div>
            </div>

            <div className="flex flex-col gap-[4rem] lg:ml-[5rem]">
            <div className="flex flex-col gap-[2.5rem]">
                <p className="text-[2rem] tracking-tighter leading-10 lg:text-[4rem] lg:leading-[4.5rem]">I craft digital 
                experiences combining <strong>design, motion</strong> and <strong>development</strong>
                </p>

                <p className="text-[1.2rem] leading-7 font-mont">
                My creative journey began 2 years ago when I discovered a passion for everything that could be created through a computer. Curious and driven by the desire to learn and practice, I spent countless hours learning UI/UX design, as well as web development, through online resources and personal projects. All of this naturally led me to continue my studies in this field and then quickly apply my skills in a professional setting.
                </p>
            </div>

            <div className="self-start">
                <RedDot text="Download my CV" />
                
            </div>
            </div>
            </div>

            <div className="mt-[4rem]">

                <div className="flex items-center gap-[.7rem]">
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">About</p>
                    <span className="h-[1px] flex-1 bg-[#393131]"></span>
                </div>

                <Skills />

            </div>

            <div className="lg:my-[4rem]">

                <div className="flex items-center gap-[.7rem]">
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">About</p>
                    <span className="h-[1px] flex-1 bg-[#393131]"></span>
                </div>

                <Toolbox />

            </div>

            <div className="lg:my-[4rem]">

                <div className="flex items-center gap-[.7rem]">
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">About</p>
                    <span className="h-[1px] flex-1 bg-[#393131]"></span>
                </div>

                <div className="flex flex-col items-center gap-[1rem] mt-[2rem] lg:flex-row">
                    <h1 className="font-bgs text-[2.1rem] md:text-[3.5rem] lg:text-[3rem] lg:w-[220px]">Certifications</h1>

                    <div className="flex flex-col items-center text-center px-[1rem] gap-[1rem] lg:flex-row lg:items-end lg:text-left lg:ml-[5rem]">
                        <FaAward className="text-[3rem] text-[#FFD700]"/>
                        <div>
                            <SparklesText text={
                                <p className="lg:text-[1.1rem]">Foundations of User Experience (UX) Design</p>
                            } sparklesCount={5} className={'cursor-pointer text-[1rem] md:text-[1.2rem]'}/>
                            <p className="text-[#878484]">an online non-credit course authorized 
                            by Google and offered through Coursera</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
})

export default About;