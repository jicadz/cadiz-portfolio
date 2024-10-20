
const Toolbox  = () => {

    const RedDot = () => {
        return(
            <div className="bg-[#ff1d56] w-[10px] h-[10px] rounded-[50%]"></div>
        );
    }

    return(
            <div className="flex flex-col items-center gap-[1rem] mt-[3rem] lg:flex-row lg:items-start lg:gap-[8rem]">
                <h1 className="font-bgs text-[2.5rem] lg:w-[25%] sm:text-[4rem]" data-aos="fade-up" data-aos-duration="1000">Toolbox</h1>
                <div className="flex flex-wrap items-center gap-y-[.5rem] gap-x-[1rem] text-[1.8rem] font-mont lg:w-[75%] mt-[1rem] lg:text-[2.2rem]" data-aos="fade-up" data-aos-duration="1000">
                    <p>HTML</p><RedDot /><p>CSS</p><RedDot /><p>JS</p><RedDot /><p>Responsive Design</p><RedDot />
                    <p>PHP</p><RedDot /><p>Java</p><RedDot />
                    <p>Python</p><RedDot /><p>WordPress</p><RedDot /><p>Figma</p><RedDot />
                    <p>Adobe Photoshop</p><RedDot /><p>MongoDB</p><RedDot /><p>SQL</p>
                </div>
                    
            </div>
    );

}

export default Toolbox;