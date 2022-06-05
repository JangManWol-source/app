import React from 'react'
import classes from './Logo.module.css'

const Logo = () => {
  return (
    <div>
            <table>
                <tr>
                    <td>
                        <div className={classes.circle1}></div>
                    </td>
                    <td>
                        <div className={classes.circle2}></div>
                    </td>
                    <td>
                        <div className={classes.circle3}></div>
                    </td>
                </tr>
            </table>
    </div>
  )
}

export default Logo