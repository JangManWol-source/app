import React from 'react'
import Card from '../../UI/Card/Card'
import './AwardsItem.css'

const AwardItems = (props) => {
  return (
    <div className='items'>{props.certificates.map((each) => 
        <Card key={each.id} className="card">
            <div className='title'>
                {each.title}
            </div>
            <div className='img'>
                {each.img}
            </div>
        </Card>)}</div>
  )
}

export default AwardItems