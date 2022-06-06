
import React from 'react'
import Logo from '../../UI/Logo/Logo'
import classes from './Nav.module.css'
const Nav = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <Logo />
        <h3>Joe Cristian Jamis</h3>
      </div>
      <div className={classes.item}>
        <div>Home</div>
        <div>About</div>
        <div>Timeline</div> 
      </div>
      <div className={classes.button}>
        <button>Visit Me</button>
      </div>

    </div>
  )
}

export default Nav