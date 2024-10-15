import React from "react";
import RedDot from "../red-dot/RedDot";

const Contact = React.forwardRef((props, ref) => {
    return(
        <section ref={ref} className="pb-[1rem] sm:mt-[15%] lg:pb-[2rem] lg:px-[5rem]">

            <div className="flex flex-col items-center justify-center mb-[1rem]">
                    <p className="font-bgs text-[2rem] md:text-[3rem]">Contact Me</p>
                    <p className="font-mont text-[.8rem] md:text-[1rem]">Feel free to get in touch with me</p>
            </div>

            <div className="flex flex-col items-center border-[1px] border-[solid] border-[#393131] rounded-[50px] py-[7rem]">
                <p className="font-bgs text-[1rem] sm:text-[2rem]">Looking for a new talent?</p>
                <p className="font-mont font-medium text-[1.1rem] sm:text-[2.4rem] lg:text-[3.6rem] hover:text-[#E01515] cursor-pointer transition-all ease-in">joshuaiancadiz@gmail.com</p>
                <p className="font-mont font-medium text-[1.1rem] sm:text-[2rem] lg:text-[3rem] hover:text-[#E01515] cursor-pointer transition-all ease-in">(425) 555-1212</p>
                <div className="flex justify-center gap-[1rem] scale-[.7] mt-[2rem] md:scale-[1] md:gap-[3rem]">
                     <a href="https://www.linkedin.com/in/joshua-ian-cadiz-818082333/" target="_blank"><RedDot text="LinkedIn"/></a>
                     <RedDot text="Download my CV"/>
                </div>
            </div>

            <div className="flex flex-col items-center mt-[1rem] md:flex-row md:justify-between">
                <div className="font-mont relative w-[fit-content] leading-[1.3rem] text-[.7rem] md:text-[.9rem] md:order-2">
                    <p>Available for a full-time position</p>
                    <div className='pulse top-[5px]'>
                        <span style={{ "--i": 0 }}></span>
                    </div> 
                </div>
                <p className="font-mont text-[.7rem] text-[#878484] md:order-1">©2024 J.I. Cadiz</p>
                <p className="font-mont text-[.7rem] text-[#878484] md:order-3">Made by J.I. Cadiz</p>
            </div>

        </section>
    );
})

export default Contact;