import React from "react";
import './Projects.css'

const Projects = (() => {
    return(
        <section className="mt-[7rem] flex flex-col lg:px-[4rem]" id="projects">
            <div className="flex items-center justify-center gap-[1rem]" data-aos="fade-up" data-aos-duration="800">
                <span className="h-[1px] flex-1 bg-[#393131]"></span>
                    <p className="font-bgs text-[3rem] lg:text-[6rem]">MY WORKS</p>
                <span className="h-[1px] flex-1 w-[20px] bg-[#393131]"></span>
            </div>
        </section>
    );
})

export default Projects;