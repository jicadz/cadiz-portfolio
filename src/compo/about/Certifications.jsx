import { ShinyButton } from "@/components/ui/ShinyButton";
import { FaAward } from "react-icons/fa6";

const Certifications = () => {
    return(
        <div className="flex flex-col items-center gap-[1rem] mt-[3rem] lg:flex-row lg:items-start lg:gap-[8rem]">
                <h1 className="font-bgs text-[2.1rem] md:text-[4rem] lg:w-[25%]">Certifications</h1>

                <ShinyButton children={
                    <div className="flex flex-col items-center gap-[1rem] lg:flex-row lg:items-start lg:text-left font-mont mt-[1rem]">
                    <FaAward className="text-[3rem] text-[#ff1d56]"/>
                    <div>
                        <p className="lg:text-[1.5rem]">Foundations of User Experience (UX) Design</p>
                        <p className="text-[#878484] max-w-[400px]">an online non-credit course authorized 
                        by Google and offered through Coursera</p>
                        
                    </div>
                    </div>
                } className={'lg:w-[75%]'}/>

        </div>
    );
}

export default Certifications