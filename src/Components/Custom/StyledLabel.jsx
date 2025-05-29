import { FaCirclePlus } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

export const StyledLabel = ({text}) =>{

    return(
       <span className="text-xl text-text flex items-center space-x-2">
            <FaApple />
            <span>
                {text}
            </span>
       </span> 
    )
}
