import React from 'react';
import RedDot from '../red-dot/RedDot'
import './Homepage.css'

const Homepage = React.forwardRef((props, ref) => {
    return(
        <section ref={ref} className="flex flex-col items-center gap-[2rem] pt-[10rem]">
            <div className='flex flex-col items-center gap-[2rem] w-[100%] mb-[1rem] lg:flex-row lg:justify-center lg:items-center xl:gap-[2.5rem]'>
            <div className="flex flex-col items-center text-center lg:w-[40%] lg:text-right lg:items-end">
                <h1 className="font-bgs text-[2.8rem] xl:text-[4rem]">Joshua Ian Cadiz</h1>
                <div className="font-mont relative w-[fit-content] text-[.8rem] leading-[1.3rem] lg:text-[.9rem]">
                    <p>Based in Iloilo, Philippines</p>
                    <p>Available for a full-time position</p>
                    <div className='pulse'>
                        <span style={{ "--i": 0 }}></span>
                    </div> 
                </div>
            </div>

            <div className="relative self-center">
                <div className="outer-circle flex items-center justify-center">
                    <div className="inner-circle"></div>
                </div>
                <div className="face-image"></div>
            </div>

            <div className='lg:w-[40%]'>
                <p className="font-bgs text-[1.8rem] mt-[2rem] sm:text-[2.8rem] lg:mt-0 lg:leading-[3rem] xl:text-[4rem] xl:leading-[5rem]">UI/UX Designer & Web Developer</p>
            </div>
            </div>

            <div className="scroll-reveal mt-[4rem] mb-[2rem] lg:w-[95%]">
                <p className="text-left font-mont text-[1.5rem] font-normal lg:text-[2.5rem] md:text-indent-24">
                <span>
                As a passionate <strong>UI/UX Designer</strong> and <strong>Web Developer</strong> with 3 years of experience, I specialize in crafting <strong>user-centric designs</strong> and <strong>developing responsive, intuitive websites</strong>. My expertise lies in bridging the gap between aesthetics and functionality, ensuring seamless user experiences while delivering high-quality code.
                </span>
                </p>
            </div>

            <RedDot text='View my projects'/>
            
        </section>
    );
})

export default Homepage