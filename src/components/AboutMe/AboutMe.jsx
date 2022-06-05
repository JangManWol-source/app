import React from 'react'
import classes from './AboutMe.module.css'

const AboutMe = () => {
    return (
        <div className={classes.about_me}>
            <div className={classes.profile}>
                <div>LOGO</div>
            </div>
            <div className={classes.info}>
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
            </div>
        </div>
    )
}

export default AboutMe