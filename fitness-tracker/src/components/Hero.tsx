import { motion } from 'framer-motion'
import banner from '../assets/images/banner.png' 

const Hero = () => {
  
    return (
        <section className='flex sm:justify-between min-h-[600px] overflow-hidden md:overflow-x-visible'>
            <motion.div 
                initial={{
                    opacity: 0,
                    translateX: -50
                }}
                animate={{
                    opacity: 1,
                    translateX: 0
                }}
                transition={{ 
                    duration: 1.2,
                    staggerChildren: 0.1, 
                    delayChildren: 1
                }}
                className='px-10 min-h-[600px] sm:pl-16 lg:pl-48 lg:gap-y-4 flex flex-col justify-center relative '
            >
                <h2 className="text-2xl lg:text-3xl text-primary ">
                    Fitness Club
                </h2>
                <h1 className="text-5xl lg:text-6xl tracking-wider font-bold">
                    Sweat, Smile <br /> and Repeat
                </h1>
                <h2 className="text-slate-600 mt-2 lg:text-xl">
                    Checkout the most effective exercise.
                </h2>
                <a href='#explore-exercise'>
                    <button className="text-white max-w-[150px] bg-primary px-4 py-2 rounded-sm mt-4">
                        Explore Exercise
                    </button>
                </a>
                <motion.h1 
                    initial={{
                        opacity: 0,
                        translateX: -50
                    }}
                    animate={{
                        opacity: 0.2,
                        translateX: 0   
                    }}
                    transition={{
                        delay: 1.2,
                        duration: 1.2
                    }}

                    className='uppercase text-primary font-bold text-8xl sm:text-9xl absolute -z-[1] bottom-0 ' >
                    Exercise
                </motion.h1>
            </motion.div>
            <motion.img
                initial={{
                    opacity: 0,
                    translateX: 50,
                    translateY: -50
                }}
                animate={{
                    opacity: 1,
                    translateX: 0,
                    translateY: 0
                }} 
                transition={{
                    delay: 0.7  ,
                    duration: 1.2
                }}
                src={banner}
                className="max-w-[400px] hidden sm:block lg:max-w-[500px]"
                alt="banner"
            />
        </section>
    )
}

export default Hero