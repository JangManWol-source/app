import React from 'react'
import AwardItems from './AwardItems'
import './Award.css'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const Award = () => {
  
  const [ref, inView] = useInView()
  useEffect(() => {
    console.log(inView)
  
  }, [inView])

  const certificates = ([{
    id: Math.random().toString(),
    title: 'Basic HTML & CSS',
    img: null
  },
  {
    id: Math.random().toString(),
    title: 'Basic HTML & CSS',
    img: null
  },
  {
    id: Math.random().toString(),
    title: 'Basic HTML & CSS',
    img: null
  },
  {
    id: Math.random().toString(),
    title: 'Basic HTML & CSS',
    img: null
  }
])

  return (
    <div className='main' ref={ref}>
      <div className="header">
        <div className='item'>
          <div className='num'>{inView && <CountUp start={0} duration={2} end={452}/>}</div>
          <div>
          Cups Of Coffee</div>
        </div>
        <div className='item'>
          <div className='num'>{inView && <CountUp start={0} duration={2} end={4}/>}</div>
          <div>React Projects</div>
        </div>
        <div className='item'>
          <div className='num'>{inView && <CountUp start={0} duration={2} end={10}/>}</div>
          <div>Certificates</div>
        </div>
        <div className='item'>
          <div className='num'>{inView && <CountUp start={0} duration={2} end={8301}/>}</div>
          <div>Sleeps (Nights)</div>
        </div>
      </div>
      <div className="certificates">
        <AwardItems certificates={certificates} />
      </div>
    </div>
  )
}

export default Award
