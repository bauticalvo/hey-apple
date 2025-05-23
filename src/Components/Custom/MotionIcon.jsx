import { motion } from "framer-motion";

const MotionIcon = ({ icon_1: Icon1, icon_2: Icon2, dark, plus, hovered }) => {
  return (
    <motion.div
      className={`relative overflow-hidden w-8 h-auto flex flex-row hover:cursor-pointer items-center ${dark ? " text-text" : " text-text"}`}
    >
      <div className="flex w-full py-2  text-text-op text-md md:text-xl 2xl:text-2xl text-center items-center justify-center">
        <motion.span
          initial={{ y: 0, opacity: 1 , rotate: 0}}
          animate={{ y: hovered ? 20 : 0, opacity: hovered ? 0 : 1 ,  rotate: hovered && plus === 22 ? -45 : -45}}
          transition={{ duration: 0.3 }}
          className="absolute flex items-center w-auto"
        >
          <Icon1 className="relative " />
        </motion.span>
        <motion.span
          initial={{ y: -20, opacity: 0, rotate: 0 }}
          animate={{ y: hovered ? 0 : -20, opacity: hovered ? 1 : 0, rotate: hovered && plus === 22 ? -45 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute flex items-center w-auto"
        >
          <Icon2 className="relative " />
        </motion.span>
      </div>
      {plus === 2 && (
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: hovered ? 135 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon2 className="relative text-text text-[10px]" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default MotionIcon;
