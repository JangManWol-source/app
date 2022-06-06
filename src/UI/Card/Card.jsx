import React from 'react'
import classes from './Card.module.css'
import { motion } from 'framer-motion'

const Card = (props) => {

  return (
    <motion.div className={`${classes.card} ${props.className}`} whileHover={{scale:1.2}} whileTap={{scale:1.2}} initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0, animationDelay:1
      
    }}>{props.children}</motion.div>
  )
}

export default Card