import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";

const RedDot = (props) => {

    const [isHovered, setIsHovered] = useState(false);

    const hoveredTrue = () => {
        setIsHovered(true);
    }

    const hoveredFalse = () => {
        setIsHovered(false);
    }
    
    return(
        <button className="reddot-cont flex gap-[1.2rem] justify-center items-center cursor-pointer"
        onMouseEnter={hoveredTrue} onMouseLeave={hoveredFalse}>
            <div className="reddot relative w-[10px] h-[10px] bg-[#ff1d56] rounded-[50%] flex justify-center items-center" style={{transform: isHovered ? 'scale(3.5)' : 'scale(1)', transition: 'all .3s ease' }}>
            <FiArrowUpRight className="arrow absolute bottom-[-30px] text-[#100200] text-[.5rem]" style={{bottom: isHovered ? '1.1px' : '-30px', transition: 'all .2s ease', display: isHovered ? 'block' : 'none'}}/>
            </div>
            <p className="font-mont text-[1rem]" style={{color: isHovered ? '#ff1d56' : '#F8F4E6', transition: 'all .3s ease'}}>{props.text}</p>
        </button>
    );
}

export default RedDot;