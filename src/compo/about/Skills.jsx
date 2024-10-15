import Lens from "../../components/ui/Lens"

const Skills = () => {

    return(
        <div className="flex flex-col items-center gap-[1rem] mt-[3rem] lg:flex-row lg:items-start lg:gap-[8rem]">
            <h1 className="font-bgs text-[2.1rem] lg:w-[25%] sm:text-[4rem]">Skills</h1>
            <div className="flex flex-col items-center gap-[1rem] mt-[2rem] lg:flex-row lg:items-start lg:gap-[2rem] lg:w-[75%]">
            <Lens children={
                <div className="skill-card flex flex-col items-center gap-[.7rem] font-mont p-[1rem] text-center">
                    <div className="rounded-[10px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <p className="text-[1.2rem]">UI/UX Design</p>
                    <ul className="text-[.8rem]">
                        <li>Prototyping</li>
                        <li>Design Systems</li>
                        <li>Presentations</li>
                        <li>Graphic Design</li>
                    </ul>
                </div>
            }/>

            <Lens children={
                <div className="skill-card flex flex-col items-center gap-[.7rem] font-mont p-[1rem] text-center">
                    <div className="rounded-[10px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <p className="text-[1.2rem]">Web Development</p>
                    <ul className="text-[.8rem]">
                        <li>Wordpress Themes</li>
                        <li>SEO</li>
                        <li>Front-End Development</li>
                        <li>Back-End Development</li>
                    </ul>
                </div>
            }/>
            </div>

        </div>
    );
}

export default Skills;