import React from 'react'
import AwardItems from './AwardItems'
import './Award.css'

const Award = () => {
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
    <div className='main'>
      <div className="header">
        <div className='item'>
          <div className='num'>452</div>
          <div>
          Cups Of Coffee</div>
        </div>
        <div className='item'>
          <div className='num'>4</div>
          <div>React Projects</div>
        </div>
        <div className='item'>
          <div className='num'>10</div>
          <div>Certificates</div>
        </div>
        <div className='item'>
          <div className='num'>8301</div>
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
