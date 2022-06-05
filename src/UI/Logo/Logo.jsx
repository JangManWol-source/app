import React from 'react'
import classes from './Logo.module.css'
import { motion } from 'framer-motion'
const Logo = () => {
    const variants = {
        hidden:{
            opacity:0,
            x:'-100vw'
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                type: 'spring',
                duration: 1
            }
        },
        visible2:{
            opacity:1,
            x:0,
            transition:{
                type: 'spring',
                duration: 1.5
            }
        },
        visible3:{
            opacity:1,
            x:0,
            transition:{
                type: 'spring',
                duration: 2
            }
        },

    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <motion.td variants={variants} initial='hidden' animate='visible'>
                            <div className={classes.circle1} ></div>
                        </motion.td>
                        <motion.td variants={variants} initial='hidden' animate='visible2'>
                            <div className={classes.circle2}></div>
                        </motion.td>
                        <motion.td variants={variants} initial='hidden' animate='visible3'>
                            <div className={classes.circle3}></div>
                        </motion.td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Logo