import { motion } from "framer-motion";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const PointButton = ({ text_1, text_2, dark, plus}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      className={`relative  hover:cursor-pointer flex flex-row items-center text-background p-1  w-full  h-auto bg-text rounded-full`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex w-full py-2 text-center text-lg items-center justify-center">
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
          <motion.div
            initial={{scale: 1, }}
            animate={{ scale: hovered ? 1.1 : 0.8,  }}
            transition={{ duration: 0.3 }}
            className=" rounded-full bg-background p-2"
          >
          </motion.div>
    </motion.button>
  );
};

export default PointButton;
