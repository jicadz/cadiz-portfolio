import React from "react";
import './Projects.css'

const Projects = React.forwardRef((props, ref) => {
    return(
        <section ref={ref} className="mt-[7rem] flex flex-col lg:px-[5rem]">
            <div className="flex items-center justify-center gap-[1rem]">
                <span className="h-[1px] flex-1 bg-[#393131]"></span>
                    <p className="font-bgs text-[3rem] lg:text-[6rem]">MY PROJECTS</p>
                <span className="h-[1px] flex-1 w-[20px] bg-[#393131]"></span>
            </div>
        </section>
    );
})

export default Projects;