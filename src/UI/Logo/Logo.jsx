import React from 'react'
import classes from './Logo.module.css'
import { motion } from 'framer-motion'
const Logo = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <motion.td initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: .5 }}>
                            <div className={classes.circle1} ></div>
                        </motion.td>
                        <motion.td initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                            <div className={classes.circle2}></div>
                        </motion.td>
                        <motion.td initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 1.5 }}>
                            <div className={classes.circle3}></div>
                        </motion.td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Logo