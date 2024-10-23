import React from "react";
import RedDot from "../red-dot/RedDot";
import "./About.css"
import Toolbox from "./Toolbox";
import Skills from "../about/Skills"
import Certifications from "./Certifications";
import cv from "../../assets/JoshuaIanCadiz.pdf"

const About = (() => {
    return(
        <section className="flex flex-col gap-[4rem] cursor-default my-[6rem]" id="about">
            <div className="flex items-center justify-center gap-[1rem]" data-aos="fade-up" data-aos-duration="800">
                <span className="h-[1px] flex-1 bg-[#393131]"></span>
                    <p className="font-bgs text-[3rem] lg:text-[6rem]">ABOUT ME</p>
                <span className="h-[1px] flex-1 w-[20px] bg-[#393131]"></span>
            </div>

            <div className="flex flex-col items-center gap-[3rem] lg:mt-[5rem] lg:flex-row lg:gap-[8rem]">
            <div className="relative self-center lg:self-start lg:w-[25%]" data-aos="fade-up" data-aos-duration="800">
                <div className="outer-circle2 flex items-center justify-center">
                    <div className="inner-circle2"></div>
                </div>
                <div className="face-image2"></div>
            </div>

            <div className="flex flex-col gap-[4rem] lg:w-[75%]">
            <div className="flex flex-col gap-[2.5rem]">
                <p className="text-[2rem] tracking-tighter leading-10 lg:text-[4rem] lg:leading-[4.5rem] bg-[#0e090d]" data-aos="fade-up" data-aos-duration="800">I craft digital 
                    experiences combining <strong>design, motion</strong> and <strong>development</strong>
                </p>

                <p className="text-[1.2rem] leading-7 font-mont bg-[#0e090d]" data-aos="fade-up" data-aos-duration="800">
                    My creative journey began 2 years ago when I discovered a passion for everything that could be created through a computer. Curious and driven by the desire to learn and practice, I spent countless hours learning UI/UX design, as well as web development, through online resources and personal projects. All of this naturally led me to continue my studies in this field and then quickly apply my skills in a professional setting.
                </p>
            </div>

            <div className="self-start" data-aos="fade-up" data-aos-duration="800">
                <a href={cv} download={'JoshuaIanCadiz.pdf'}><RedDot text="Download my CV" /></a>
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

            <div className="lg:mt-[4rem]">

                <div className="flex items-center gap-[.7rem]">
                    <p className="text-[#878484] text-[.6rem] lg:text-[.8rem]">About</p>
                    <span className="h-[1px] flex-1 bg-[#393131]"></span>
                </div>

                <Certifications />

            </div>

        </section>
    );
})

export default About;