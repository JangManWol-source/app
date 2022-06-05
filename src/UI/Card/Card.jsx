import React from 'react'
import classes from './Card.module.css'
import { motion } from 'framer-motion'
const Card = (props) => {
  return (
    <motion.div className={`${classes.card} ${props.className}`} whileHover={{scale:1.2}}>{props.children}</motion.div>
  )
}

export default Card