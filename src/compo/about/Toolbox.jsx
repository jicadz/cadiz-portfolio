
const Toolbox  = () => {

    const RedDot = () => {
        return(
            <div className="bg-[#ff1d56] w-[10px] h-[10px] rounded-[50%]"></div>
        );
    }

    return(
        <div className="flex flex-col items-center gap-[1rem] lg:flex-row lg:items-center">
            <div className="flex flex-col items-center gap-[1rem] mt-[1rem] lg:items-start lg:flex-row lg:gap-[2.5rem]">
                <h1 className="font-bgs text-[2.1rem] md:text-[3.5rem] lg:text-[3rem] lg:w-[220px]">Toolbox</h1>
                <div className="flex flex-wrap items-center gap-y-[.5rem] gap-x-[1rem] lg:ml-[5rem] mt-[2rem] text-[1.4rem] sm:text-[2.1rem] max-w-[700px] font-mont">
                    <p>HTML</p><RedDot /><p>CSS</p><RedDot /><p>JS</p><RedDot /><p>React JS</p><RedDot />
                    <p>Express JS</p><RedDot /><p>Java</p><RedDot />
                    <p>Python</p><RedDot /><p>Wordpress</p><RedDot /><p>Figma</p><RedDot />
                    <p>Adobe Photoshop</p><RedDot /><p>MongoDB</p><RedDot /><p>SQL</p>
                </div>
                    
            </div>

        </div>
    );

}

export default Toolbox;