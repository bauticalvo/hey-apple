
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope  } from 'react-icons/fa';


const Menu = ({ isOpen, setIsOpen }) => {

  const navigate = useNavigate();


  const handleMail = ()=>{
    setIsOpen(false)
  }

    return (
          <motion.div   
            className={`fixed z-[50] top-0 w-full h-[90vh] rounded-2xl shadow-black bg-background p-4 shadow-2xl flex flex-col justify-center items-center text-text space-y-8
              ${ isOpen ? 'flex' : 'hidden'}`}
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.5 }}
          >
            <motion.section className='my-10 p-2 text-xl font-bold flex flex-col items-center  space-y-8 '>
           <button
            onClick={()=> navigate('/')}
           >Inicio
           </button>
           <button
            onClick={()=> navigate('/profile')}
           >Perfil
           </button>
           <button
            onClick={()=> navigate('/proyects')}
           >Proyectos
           </button>

            </motion.section>
            <motion.section className='flex space-x-6'>
            <motion.a
                onClick={ ()=> window.open("https://github.com/bauticalvo")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-3xl" />
              </motion.a>
              <motion.a
                onClick={ ()=> window.open("https://www.linkedin.com/in/juan-bautista-calvo-668613238/")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="text-3xl" />
              </motion.a>
         
              <motion.a
                onClick={ ()=> window.open("https://www.instagram.com/bauti.calvoo/")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="text-3xl" />
              </motion.a>
              <motion.a
                onClick={ ()=> handleMail()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope  className="text-3xl" />
              </motion.a>
            </motion.section>
          </motion.div>
    );
}

export default Menu;
