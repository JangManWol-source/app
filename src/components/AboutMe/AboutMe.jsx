import React from 'react'
import classes from './AboutMe.module.css'
import Nav from '../Nav/Nav';
const AboutMe = () => {

    return (
        <div className={classes.nav}>
            <Nav />
            <div className={classes.nav_content}>
                <div className={classes.details}>
                <div className={classes.hello}>Hello there,</div>
                <div className={classes.name}>I'm Joe Cristian</div>
                <div className={classes.message}>an anspiring <strong>full-stack developer.</strong></div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe