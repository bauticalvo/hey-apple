import { motion } from 'framer-motion';



export const Header = ({isOpen, setIsOpen}) => {


    return (
        <div className="h-[7vh] z-60 fixed top-0 w-full bg-background flex items-center justify-between px-10 ">
            <img 
                src="/Logos/hey-apple-logo2.png"
                className="h-[5vh] w-auto "
            />
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative text-2xl font-black ${ isOpen ? 'text-beige   ' : 'text-persian '} flex flex-col justify-center items-end space-y-2`}
                >
                    {/* Primera línea */}
                    <motion.div
                    className={` ${isOpen ? 'w-16 ' : 'w-16 '} h-[2px] bg-text`}
                    animate={{ rotate: isOpen ? 15 : 0, y: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    />
                    {/* Segunda línea */}
                    <motion.div
                    className={`w-16 h-[2px] bg-text`}
                    animate={{ rotate: isOpen ? -15 : 0, y: isOpen ? -8 : 0 }}
                    transition={{ duration: 0.3 }}
                    />
                </motion.button>
           
        </div>
    )
}
