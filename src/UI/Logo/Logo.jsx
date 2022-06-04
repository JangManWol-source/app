import React from 'react'
import classes from './Logo.module.css'

const Logo = () => {
  return (
    <div>
            <table>
                <tr>
                    <td>
                        <div className={classes.circle}></div>
                    </td>
                    <td>
                        <div className={classes.circle}></div>
                    </td>
                    <td>
                        <div className={classes.circle}></div>
                    </td>
                </tr>
            </table>
    </div>
  )
}

export default Logo