import React from 'react'
import './CircleBar.css'

const CircleBar = (props) => {
  return (
    <div className="circle-wrap">
    <div className="circle">
      <div className="mask full">
        <div className="fill"></div>
      </div>
      <div className="mask half">
        <div className="fill"></div>
      </div>
      <div className="inside-circle"> {props.value} </div>
    </div>
  </div>
  )
}

export default CircleBar