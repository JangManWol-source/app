import React from 'react'
import Logo from '../../UI/Logo/Logo'
import classes from './Nav.module.css'
const Nav = () => {
  return (
    <div className={classes.nav}>
        <div className={classes.circle_wrapper}>
         <Logo />
        </div>
        <div className={classes.with_line}>
            <div>About Me</div>
            <div className={classes.line}></div>
        </div>
        <div>
          <div>
            Night

          </div>
        </div>
    </div>
  )
}

export default Nav