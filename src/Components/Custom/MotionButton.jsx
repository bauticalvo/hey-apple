import { motion } from "framer-motion";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const MotionButton = ({ text_1, text_2, dark, plus}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      className={`relative  hover:cursor-pointer flex flex-row items-center  ${dark ? " text-text" : " text-text"} ${plus == 1 ? "font-semibold" : ""}
      ${ text_1 === "" ? "w-8 h-auto" : "w-full  h-auto"}
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex w-full py-2 text-center text-2xl md:text-3xl  xl:text-6xl items-center justify-center">
        <motion.span
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: hovered ? 20 : 0, opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute flex items-center w-auto"
        >
          {text_1}
        </motion.span>
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: hovered ? 0 : -20, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute flex items-center w-auto"
        >
          {text_2}
        </motion.span>
      </div>
      { 
        plus === 2 && (
          <motion.div
            initial={{rotate: 0, }}
            animate={{ rotate: hovered ? 135 : 0,  }}
            transition={{ duration: 0.3 }}
          >
            <FaPlus className="relative text-text text-[10px] " />
          </motion.div>
      )}
    </motion.button>
  );
};

export default MotionButton;
