import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router";



export const AppleButton = ({text, hovered, link, startTransition}) => {

    const navigate = useNavigate();
    const location = useLocation();


    return (
        <button 
        className="flex space-x-2 items-center text-2xl"
        onClick={() => {
            if(location.pathname === link) return
            startTransition(navigate, link)
        }}
        >
            {
                hovered && (
                    <motion.span
                        initial={{ x: -12, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -12, opacity: 0 }}
                        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                        className="text-text text-lg flex items-center"
                        >
                        <FaApple /> 
                    </motion.span>
                )            
            }
            <span className=" text-text  ">
                {text}
            </span>
        </button>
    )
}