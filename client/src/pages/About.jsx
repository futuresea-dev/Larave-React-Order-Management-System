import React from 'react';
import { motion } from 'framer-motion';

import PageHero from '../layout/PageHero';
import { ABOUT_IMG_URL } from '../utils/constants';


const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { duration: .3 }
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' }
    }
  };

  const underlineAnimate = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 1,
        duration: .8,
      },
    },
};


const About = () => {


    return (
        <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <PageHero title="about" />
            <div className='w-full py-32'>
                <div className='w-[85vw] flex mx-auto'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className="w-100 h-100 overflow-hidden">
                            <img className="w-full h-full object-cover rounded-full" src={ABOUT_IMG_URL}
                                 alt="About Us"/>
                        </div>
                        <div>
                            <motion.h2 className='text-4xl lg:text-6xl font-bold capitalize tracking-wider'
                                       initial={{opacity: 0, y: 60}}
                                       animate={{opacity: 1, y: 0}}
                                       transition={{duration: .5}}
                            >
                                Our Story
                                <svg
                                    className="svg-underline stroke-[#ffb81c] relative z-10 w-1/2"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={7}
                                    viewBox="0 0 422 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <motion.path
                                        d="M3 9C118.957 4.47226 364.497 -1.86658 419 9"
                                        variants={underlineAnimate}
                                        initial="hidden"
                                        animate="visible"
                                    />
                                </svg>
                            </motion.h2>
                            <motion.p className='leading-10 text-gray-600 py-8 text-lg'
                                      initial={{opacity: 0, y: 60}}
                                      animate={{opacity: 1, y: 0}}
                                      transition={{delay: .5, duration: .8}}
                            >
                                At Tech Haven Computers, we are dedicated to providing top-of-the-line computer hardware
                                and accessories tailored to meet the diverse needs of our customers. Whether you are a
                                casual user, a gaming enthusiast, or a professional seeking high-performance machines,
                                our extensive lineup of computers, laptops, and peripherals ensure that we have the
                                perfect solution for everyone.
                                Our mission is to empower individuals and businesses with cutting-edge technology that
                                enhances productivity and creativity. We believe that the right tools can transform
                                ideas into reality, and we are committed to guiding you on your journey through the
                                fascinating world of technology.
                                At Future Shop, customer satisfaction is at the heart of everything we do. Our
                                knowledgeable staff is always on hand to assist you in selecting the right products and
                                answering any questions you may have. We pride ourselves on delivering personalized
                                service, ensuring that you're not just another sale but a valued member of our
                                community.
                                Future Shop — Your Ultimate Destination for Technology Solutions!
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.main>
    );
};

export default About;