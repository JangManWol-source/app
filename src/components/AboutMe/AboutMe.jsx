import React from 'react'
import classes from './AboutMe.module.css'
import logo from '../res/drawable/logo.svg'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react' 
const AboutMe = () => {

    const[ref, inView] =  useInView();
    useEffect(() => {
    }, [inView])
    return (
        <motion.div className={classes.about_me} ref={ref}  initial={{x: '-100vw', opacity:0}} animate={{x: 0, opacity:1}} transition={{delay:.5, duration: 1, type:'spring', stiffness:150}}>
            <motion.div className={classes.profile}  >
                <motion.div className={classes.logo} whileHover={{scale:1.5}}>
                    <img src={logo} alt="" />
                </motion.div>
            </motion.div>
            <motion.div className={classes.info}>
                <div className={classes.greet}>Hello I am,</div>
                <div className={classes.name}>Joe Cristian Jamis</div>
                <div className={classes.rank}>
                    <div>
                        Full-stack Developer
                    </div>
                    <div className={classes.line}>
               

                    </div>
                </div>
                <div className={classes.message}>
                    I'm a full-stack developer with a lot
                    of drive. I'm looking for a tough position
                    that will allow me to grow my career and
                    learn more about web development.
                    I am capable of solving logical problems
                    and possess critical thinking skills.
                </div>
            </motion.div>
        </motion.div>
    )
}

export default AboutMe