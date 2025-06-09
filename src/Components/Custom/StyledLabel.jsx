import { FaApple } from "react-icons/fa";

export const StyledLabel = ({text, style}) =>{

    return(
       <span className={`text-text flex items-center space-x-2 ${style ? "text-3xl  md:text-4xl xl:text-6xl " : "text-xl"}`}>
            <FaApple />
            <span>
                {text}
            </span>
       </span> 
    )
}
