import { ShinyButton } from "@/components/ui/ShinyButton";
import { SparklesText } from "@/components/ui/SparklesText";
import { FaAward } from "react-icons/fa6";

const Certifications = () => {
    return(
        <div className="flex flex-col items-center gap-[1rem] mt-[3rem] lg:flex-row lg:items-start lg:gap-[8rem]">
                <h1 className="font-bgs text-[2.5rem] md:text-[4rem] lg:w-[25%]" data-aos="zoom-in" data-aos-duration="1000">Certifications</h1>

                <a href="https://www.coursera.org/account/accomplishments/verify/UHPJW3W38R32" className="lg:w-[75%]" target="_blank">
                <ShinyButton children={
                    <div className="flex flex-col items-center lg:flex-row lg:text-left lg:gap-[1rem] font-mont" data-aos="zoom-in" data-aos-duration="1000">
                    <FaAward className="text-[3rem] text-[#f1dada]"/>
                    <div className="">
                        <SparklesText sparklesCount={5} text={
                            <p className="text-[1rem] lg:text-[1.5rem] font-mono">Foundations of User Experience (UX) Design</p>
                        }/>
                        <p className="text-[#878484] max-w-[400px]">an online non-credit course authorized 
                        by Google and offered through Coursera</p>    
                    </div>
                    </div>
                }/>
                </a>

        </div>
    );
}

export default Certifications